# ReactJS.SPA

### Directory Layout

```
.
├── /build/                     # The folder for compiled output
├── /node_modules/              # 3rd-party libraries and utilities
├── /src/                       # The source code of the application
│   ├── /actions/               # Action creators that allow to trigger a dispatch to stores
│   ├── /components/            # React components
│   ├── /constants/             # Constants (action types etc.)
│   ├── /core/                  # Core components (Flux dispatcher, utilities)
│   ├── /decorators/            # Higher-order React components
│   ├── /public/                # Static files which are copied into the /build/public folder
│   ├── /stores/                # Stores contain the application state and logic
│   ├── /utils/                 # Utility classes and functions
│   ├── /app.js                 # Client-side startup script
│── gulpfile.js                 # Configuration file for automated builds
│── package.json                # The list of 3rd party libraries and utilities
└── webpack.config.js           # Webpack configuration for bundling and optimization
```

### Getting Started

```shell
$ npm install -g gulp           # Install Gulp task runner globally
$ npm install                   # Install Node.js components listed in ./package.json
```
