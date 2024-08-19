# drivvo-stats

This is a tool for managing Drivvo vehicle data, such as fetching vehicle information, fueling entries, and servicing records from the Drivvo API. It supports filtering by vehicle plate and saving data to JSON files.

## Quick Start

### Prerequisites
- Node.js (v12+)
- npm

### Setup
```bash
git clone <repo-url>
cd <repo-dir>
npm install
```

### Config
1. Create a `.env` in the root:
```
DRIVVO_EMAIL=
DRIVVO_PASSWORD= // this is your hashed password   
```

### Run the App
```bash
npm start
```

### Commands
- `-v`, `--vehicle`:
  Filter by vehicle plate or use "all" for the latest added vehicle.
  ```bash
  npm start -- -v ABC123
  ```
  Defaults to "all" if omitted.

- `-o`, `--output`:
  Save results to JSON files in `outputs` directory.
  ```bash
  npm start -- -o
  ```
  Defaults to `false` if ommitted.

### Examples
- **Run with default settings**:
  ```bash
  npm start
  ```

- **Run with a specific vehicle**:
  ```bash
  npm start -- -v ABC123
  ```

- **Run and save output**:
  ```bash
  npm start -- -o
  ```

- **Filter by vehicle and save**:
  ```bash
  npm start -- -v ABC123 -o
  ```

## Directory Structure
```
/src
├── /config
├── /requests
├── /utilities
└── main.js
```
