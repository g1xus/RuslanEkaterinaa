const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', 'css', 'kidswedding-inline.css');
const scssPath = path.join(__dirname, '..', 'scss', 'kidswedding-inline.scss');
const css = fs.readFileSync(cssPath, 'utf8');

// Fix double semicolons
let formatted = css.replace(/;;/g, ';');

// Split by comment blocks
const parts = formatted.split(/(\/\* === .+? === \*\/)/);
const result = [];

for (let i = 0; i < parts.length; i++) {
  const part = parts[i].trim();
  if (!part) continue;
  if (part.startsWith('/*')) {
    result.push('\n' + part + '\n');
    continue;
  }
  // Format CSS block: newlines between rules and one property per line
  let block = part
    .replace(/\}\s*(@media)/g, '}\n\n$1')
    .replace(/\}\s*(#rec)/g, '}\n\n$1')
    .replace(/\{\s*/g, ' {\n  ')
    .replace(/;\s*\}/g, ';\n}')
    // One declaration per line: ";" before a property name (letter or -)
    .replace(/;(?=[a-z-])/gi, ';\n  ');
  result.push(block);
}

let output = `// Variables (optional - use in future refactor)
$color-bg: #fdf9e2;
$color-accent: #c2255b;
$color-text: #332c2f;
$color-text-dark: #631b25;
$breakpoint-1199: 1199px;
$breakpoint-959: 959px;
$breakpoint-639: 639px;
$breakpoint-479: 479px;
`;
output += result.join('');

fs.mkdirSync(path.dirname(scssPath), { recursive: true });
fs.writeFileSync(scssPath, output);
console.log('Written:', scssPath);
