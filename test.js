const fs = require('fs');
const path = require('path');

// Read the HTML file
try {
    const htmlContent = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
    
    // Test 1: Check if the HTML file exists
    console.log('Test 1 - HTML file exists: PASS');
    
    // Test 2: Check if the HTML has a title tag
    const hasTitle = /<title>.*<\/title>/i.test(htmlContent);
    console.log(`Test 2 - Has title tag: ${hasTitle ? 'PASS' : 'FAIL'}`);
    
    // Test 3: Check if "HELLO WORLD" is present in all caps
    const hasHelloWorld = htmlContent.includes('HELLO WORLD');
    console.log(`Test 3 - Contains "HELLO WORLD" in all caps: ${hasHelloWorld ? 'PASS' : 'FAIL'}`);
    
    // Summary
    if (hasTitle && hasHelloWorld) {
        console.log('\nAll tests PASSED!');
    } else {
        console.log('\nSome tests FAILED!');
        process.exit(1);
    }
} catch (error) {
    console.error('Test 1 - HTML file exists: FAIL');
    console.error(`Error: ${error.message}`);
    process.exit(1);
}