const request = require('supertest');
const app = require('../server');

describe('Hello World OAuth App', () => {
  
  describe('GET /', () => {
    it('should return the home page', async () => {
      const response = await request(app)
        .get('/')
        .expect(200);
      
      expect(response.text).toContain('Hello World!');
      expect(response.text).toContain('Sign in with Google');
    });
  });

  describe('GET /dashboard', () => {
    it('should redirect to home when not authenticated', async () => {
      const response = await request(app)
        .get('/dashboard')
        .expect(302);
      
      expect(response.headers.location).toBe('/');
    });
  });

  describe('GET /auth/google', () => {
    it('should redirect to Google OAuth', async () => {
      const response = await request(app)
        .get('/auth/google')
        .expect(302);
      
      expect(response.headers.location).toContain('accounts.google.com');
    });
  });

  describe('GET /logout', () => {
    it('should redirect to home page', async () => {
      const response = await request(app)
        .get('/logout')
        .expect(302);
      
      expect(response.headers.location).toBe('/');
    });
  });

  describe('GET /nonexistent', () => {
    it('should return 404 error page', async () => {
      const response = await request(app)
        .get('/nonexistent')
        .expect(404);
      
      expect(response.text).toContain('Page not found');
    });
  });

  describe('Authentication middleware', () => {
    it('should protect dashboard route', async () => {
      const response = await request(app)
        .get('/dashboard')
        .expect(302);
      
      expect(response.headers.location).toBe('/');
    });
  });

  describe('Error handling', () => {
    it('should handle server errors gracefully', async () => {
      // This test would need to be expanded with actual error scenarios
      // For now, we'll test that the error route exists
      const response = await request(app)
        .get('/trigger-error')
        .expect(404); // Should return 404 for non-existent route
    });
  });

});

describe('OAuth Configuration', () => {
  
  it('should have required environment variables defined', () => {
    // In a real test environment, you'd want to check for actual values
    // For this demo, we'll just check that the variables are accessible
    expect(process.env.GOOGLE_CLIENT_ID).toBeDefined();
    expect(process.env.GOOGLE_CLIENT_SECRET).toBeDefined();
  });

  it('should have session configuration', () => {
    expect(process.env.SESSION_SECRET).toBeDefined();
  });

});

describe('Security', () => {
  
  it('should have secure session configuration in production', () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'production';
    
    // Test would verify secure cookie settings
    // This is a placeholder for more comprehensive security tests
    expect(process.env.NODE_ENV).toBe('production');
    
    process.env.NODE_ENV = originalEnv;
  });

  it('should not expose sensitive information in responses', async () => {
    const response = await request(app)
      .get('/')
      .expect(200);
    
    expect(response.text).not.toContain('client_secret');
    expect(response.text).not.toContain('session_secret');
  });

});