import fs from 'fs';
import path from 'path';

export async function saveJsonToFile(filename, data) {
  const filePath = path.join(__dirname, filename);
  fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
    if (err) {
      console.error(`Failed to save ${filename}:`, err);
    } else {
      console.log(`${filename} has been saved.`);
    }
  });
}
