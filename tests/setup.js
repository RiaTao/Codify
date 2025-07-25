// Test setup file
require('dotenv').config({ path: '.env.test' });

// Set test environment variables
process.env.NODE_ENV = 'test';
process.env.GOOGLE_CLIENT_ID = 'test_client_id';
process.env.GOOGLE_CLIENT_SECRET = 'test_client_secret';
process.env.SESSION_SECRET = 'test_session_secret';
process.env.PORT = '3001';

// Mock console.log for cleaner test output
const originalLog = console.log;
console.log = (...args) => {
  if (!args[0]?.includes('listening on port')) {
    originalLog(...args);
  }
};

// Global test utilities
global.mockUser = {
  id: '123456789',
  name: 'Test User',
  email: 'test@example.com',
  photo: 'https://example.com/photo.jpg'
};

// Clean up after tests
afterAll(() => {
  console.log = originalLog;
});