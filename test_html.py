#!/usr/bin/env python3
"""
Unit tests for the HTML page to verify it meets the requirements.
"""

import unittest
import os
from bs4 import BeautifulSoup


class TestHTMLPage(unittest.TestCase):
    """Test cases for the HTML page requirements."""
    
    def setUp(self):
        """Set up test fixtures by reading the HTML file."""
        self.html_file_path = os.path.join(os.path.dirname(__file__), 'index.html')
        with open(self.html_file_path, 'r', encoding='utf-8') as file:
            self.html_content = file.read()
        self.soup = BeautifulSoup(self.html_content, 'html.parser')
    
    def test_html_file_exists(self):
        """Test that the HTML file exists."""
        self.assertTrue(os.path.exists(self.html_file_path), "HTML file should exist")
    
    def test_page_title_is_title(self):
        """Test that the page title is 'Title'."""
        title_tag = self.soup.find('title')
        self.assertIsNotNone(title_tag, "Title tag should exist")
        self.assertEqual(title_tag.text.strip(), 'Title', "Page title should be 'Title'")
    
    def test_hello_world_in_all_caps(self):
        """Test that 'HELLO WORLD' appears in all caps in the page content."""
        page_text = self.soup.get_text()
        self.assertIn('HELLO WORLD', page_text, "Page should contain 'HELLO WORLD' in all caps")
    
    def test_valid_html_structure(self):
        """Test that the HTML has proper structure."""
        # Check for DOCTYPE
        self.assertTrue(self.html_content.strip().startswith('<!DOCTYPE html>'), 
                       "HTML should start with DOCTYPE declaration")
        
        # Check for html tag
        html_tag = self.soup.find('html')
        self.assertIsNotNone(html_tag, "HTML tag should exist")
        
        # Check for head tag
        head_tag = self.soup.find('head')
        self.assertIsNotNone(head_tag, "Head tag should exist")
        
        # Check for body tag
        body_tag = self.soup.find('body')
        self.assertIsNotNone(body_tag, "Body tag should exist")
    
    def test_hello_world_is_prominent(self):
        """Test that HELLO WORLD is displayed prominently (in h1 tag)."""
        h1_tag = self.soup.find('h1')
        self.assertIsNotNone(h1_tag, "H1 tag should exist for prominent display")
        self.assertEqual(h1_tag.text.strip(), 'HELLO WORLD', 
                        "H1 tag should contain 'HELLO WORLD'")


if __name__ == '__main__':
    unittest.main()