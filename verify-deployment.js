#!/usr/bin/env node

/**
 * Deployment Verification Script
 * Checks if all required files and configurations are ready for deployment
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Verifying Deployment Readiness...\n');

// Required files check
const requiredFiles = [
  'public/manisha-resume.pdf',
  'public/slotify.jpeg',
  'public/Animation - 1750576386234.json',
  'public/Animation - 1750579178886.json',
  'next.config.js',
  'package.json',
  'tsconfig.json',
  '.env.example',
  'README.md',
  'DEPLOYMENT.md'
];

let allFilesExist = true;

console.log('📁 Checking Required Files:');
requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - MISSING!`);
    allFilesExist = false;
  }
});

// Check package.json scripts
console.log('\n📦 Checking Package Scripts:');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const requiredScripts = ['dev', 'build', 'start', 'lint'];

requiredScripts.forEach(script => {
  if (packageJson.scripts && packageJson.scripts[script]) {
    console.log(`✅ ${script}: ${packageJson.scripts[script]}`);
  } else {
    console.log(`❌ ${script} - MISSING!`);
    allFilesExist = false;
  }
});

// Check dependencies
console.log('\n🔧 Checking Key Dependencies:');
const keyDeps = ['next', 'react', 'react-dom', 'framer-motion', 'lottie-react', 'lucide-react'];

keyDeps.forEach(dep => {
  if (packageJson.dependencies && packageJson.dependencies[dep]) {
    console.log(`✅ ${dep}: ${packageJson.dependencies[dep]}`);
  } else {
    console.log(`❌ ${dep} - MISSING!`);
    allFilesExist = false;
  }
});

// Final result
console.log('\n' + '='.repeat(50));
if (allFilesExist) {
  console.log('🎉 DEPLOYMENT READY!');
  console.log('✅ All required files and configurations are present');
  console.log('🚀 You can now deploy to GitHub and Vercel');
  console.log('\nNext steps:');
  console.log('1. git add .');
  console.log('2. git commit -m "Portfolio ready for deployment"');
  console.log('3. git push origin main');
  console.log('4. Deploy on Vercel');
} else {
  console.log('❌ DEPLOYMENT NOT READY');
  console.log('Please fix the missing files/configurations above');
}
console.log('='.repeat(50));
