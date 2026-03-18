# -*- coding: utf-8 -*-
import re

path = r'c:\Users\g\Downloads\weiding\page.html'
with open(path, 'r', encoding='utf-8') as f:
    html = f.read()

# Replace CDN CSS with local
html = html.replace('https://static.tildacdn.com/css/tilda-grid-3.0.min.css', 'css/tilda-grid-3.0.min.css')
html = html.replace('https://static.tildacdn.com/ws/project6541539/tilda-blocks-page83277506.min.css?t=1771507773', 'css/tilda-blocks-page83277506.min.css')
html = html.replace('https://static.tildacdn.com/css/tilda-animation-2.0.min.css', 'css/tilda-animation-2.0.min.css')
html = html.replace('https://static.tildacdn.com/css/tilda-zoom-2.0.min.css', 'css/tilda-zoom-2.0.min.css')
html = html.replace('https://static.tildacdn.com/css/tilda-forms-1.0.min.css', 'css/tilda-forms-1.0.min.css')

# Add kidswedding-inline.css after tilda-forms (before custom.css)
html = html.replace(
    'css/tilda-forms-1.0.min.css" type="text/css" media="all" onerror="this.loaderr=\'y\';" /> <link rel="stylesheet" type="text/css" href="/custom.css?t=',
    'css/tilda-forms-1.0.min.css" type="text/css" media="all" onerror="this.loaderr=\'y\';" /> <link rel="stylesheet" type="text/css" href="css/kidswedding-inline.css" /> <link rel="stylesheet" type="text/css" href="/custom.css?t='
)

# Remove all <style>...</style> blocks
html = re.sub(r'<style[^>]*>.*?</style>', '', html, flags=re.DOTALL)

with open(r'c:\Users\g\Downloads\weiding\index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print('index.html created')
