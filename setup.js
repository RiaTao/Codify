#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

console.log('🚀 Hello World OAuth Setup Script');
console.log('==================================\n');

// Check if .env file exists
const envPath = path.join(__dirname, '.env');
const envExamplePath = path.join(__dirname, '.env.example');

if (!fs.existsSync(envPath)) {
  if (fs.existsSync(envExamplePath)) {
    // Copy .env.example to .env
    fs.copyFileSync(envExamplePath, envPath);
    console.log('✅ Created .env file from .env.example');
    
    // Generate a random session secret
    const sessionSecret = crypto.randomBytes(32).toString('hex');
    let envContent = fs.readFileSync(envPath, 'utf8');
    envContent = envContent.replace(
      'SESSION_SECRET=your_super_secret_session_key_change_this_in_production',
      `SESSION_SECRET=${sessionSecret}`
    );
    fs.writeFileSync(envPath, envContent);
    console.log('✅ Generated random session secret');
  } else {
    console.log('❌ .env.example file not found');
    process.exit(1);
  }
} else {
  console.log('ℹ️  .env file already exists');
}

// Check for required directories
const requiredDirs = ['public', 'views', 'tests'];
requiredDirs.forEach(dir => {
  const dirPath = path.join(__dirname, dir);
  if (fs.existsSync(dirPath)) {
    console.log(`✅ ${dir}/ directory exists`);
  } else {
    console.log(`❌ ${dir}/ directory missing`);
  }
});

// Check for required files
const requiredFiles = [
  'server.js',
  'package.json',
  'public/styles.css',
  'views/index.ejs',
  'views/dashboard.ejs',
  'views/error.ejs'
];

requiredFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file} exists`);
  } else {
    console.log(`❌ ${file} missing`);
  }
});

console.log('\n📋 Next Steps:');
console.log('1. Edit .env file and add your Google OAuth credentials');
console.log('2. Run "npm install" to install dependencies');
console.log('3. Run "npm start" to start the application');
console.log('4. Visit http://localhost:3000 to see your app');

console.log('\n🔧 Google OAuth Setup:');
console.log('1. Go to https://console.cloud.google.com/');
console.log('2. Create a new project or select existing one');
console.log('3. Enable Google+ API or Google People API');
console.log('4. Create OAuth 2.0 Client ID credentials');
console.log('5. Set redirect URI to: http://localhost:3000/auth/google/callback');
console.log('6. Copy Client ID and Secret to your .env file');

console.log('\n🎉 Setup complete! Happy coding!');