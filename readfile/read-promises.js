import { readFile } from 'node:fs/promises';

try {
  const data = await readFile('config.json', 'utf8');
  const config = JSON.parse(data);
  console.log('Config loaded', config);

} catch (error) {
  console.error('Failed to read file ', error.message); 
}
