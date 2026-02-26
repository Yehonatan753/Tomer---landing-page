import re

with open('mfu_landing_page.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract styles
style_match = re.search(r'<style>(.*?)</style>', content, re.DOTALL)
css = style_match.group(1) if style_match else ""

# Extract body
body_match = re.search(r'<body>(.*?)<script', content, re.DOTALL)
if body_match:
    body = body_match.group(1)
else:
    body_match = re.search(r'<body>(.*?)</body>', content, re.DOTALL)
    body = body_match.group(1) if body_match else ""

# Convert HTML to JSX
body = body.replace('class=', 'className=')
body = body.replace('onclick="alert(', 'onClick={() => alert(')
# Convert inline styles: style="color: var(--accent-light)" -> style={{ color: "var(--accent-light)" }}
def style_replacer(match):
    style_str = match.group(1)
    parts = style_str.split(';')
    obj_str = []
    for p in parts:
        p = p.strip()
        if not p: continue
        k, v = p.split(':', 1)
        k = k.strip()
        v = v.strip()
        # camelCase the key
        k_camel = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), k)
        obj_str.append(f"'{k_camel}': '{v}'")
    return f"style={{{{{', '.join(obj_str)}}}}}"
    
body = re.sub(r'style="([^"]+)"', style_replacer, body)

# the <img src='...'> is currently single quoted, let's keep it but make sure no issues.
# Wait, img tags in react must be self-closing <img ... />
body = re.sub(r'(<img[^>]*?[^/])>', r'\1 />', body)

# <br> -> <br />
body = body.replace('<br>', '<br />')

# Write index.css
with open('src/index.css', 'w', encoding='utf-8') as f:
    f.write(css)

# Write App.jsx
app_jsx = f"""import React, {{ useEffect }} from 'react';
import './index.css';

function App() {{
  useEffect(() => {{
    const observer = new IntersectionObserver((entries) => {{
      entries.forEach(entry => {{
        if (entry.isIntersecting) {{
          entry.target.classList.add('visible');
        }}
      }});
    }}, {{ threshold: 0.15, rootMargin: '0px 0px -40px 0px' }});
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }}, []);

  return (
    <>
{body}
    </>
  );
}}

export default App;
"""

with open('src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(app_jsx)

print("Conversion complete.")
