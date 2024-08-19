import fs from 'fs';
import path from 'path';

// Default to the root directory and create 'outputs' directory
const outputDir = path.join(process.cwd(), 'outputs');

export async function saveJsonToFile(filename, data) {
  // Combine the output directory with the filename
  const filePath = path.join(outputDir, filename);

  // Ensure the 'outputs' directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Save the JSON data to the file
  fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
    if (err) {
      console.error(`Failed to save ${filename}:`, err);
    } else {
      console.log(`${filename} has been saved to ${filePath}.`);
    }
  });
}
