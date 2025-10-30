/**
 * UltraCV.test.js
 * Unit tests for UltraCV component
 * 
 * Run with: npm test
 */

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import UltraCV from './UltraCV';

// Mock GSAP ScrollTrigger
jest.mock('gsap/ScrollTrigger', () => ({
  registerPlugin: jest.fn(),
  getAll: jest.fn(() => []),
  create: jest.fn()
}));

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: query === '(prefers-reduced-motion: reduce)',
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('UltraCV Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders without crashing', () => {
    render(<UltraCV />);
    expect(screen.getByText(/Tahsin Mert Mutlu/i)).toBeInTheDocument();
  });

  test('displays custom props', () => {
    render(
      <UltraCV
        name="John Doe"
        role="Senior Developer"
        bio="Test bio"
        email="john@test.com"
        phone="1234567890"
      />
    );
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Senior Developer')).toBeInTheDocument();
  });

  test('toggles theme on button click', () => {
    const { container } = render(<UltraCV />);
    const themeButton = screen.getByLabelText('Toggle theme');
    
    // Initial state should be dark
    expect(container.firstChild).toHaveClass('theme-dark');
    
    // Click to toggle to light
    fireEvent.click(themeButton);
    expect(container.firstChild).toHaveClass('theme-light');
    
    // Click again to toggle back
    fireEvent.click(themeButton);
    expect(container.firstChild).toHaveClass('theme-dark');
  });

  test('shows and hides developer tools panel', () => {
    render(<UltraCV />);
    const devToolsButton = screen.getByLabelText('Toggle developer tools');
    
    // Click to open
    fireEvent.click(devToolsButton);
    expect(screen.getByText('Developer Tools')).toBeInTheDocument();
    
    // Click to close
    fireEvent.click(devToolsButton);
    expect(screen.queryByText('Developer Tools')).not.toBeInTheDocument();
  });

  test('toggles CSS panel', () => {
    render(<UltraCV />);
    
    // Open dev tools first
    fireEvent.click(screen.getByLabelText('Toggle developer tools'));
    
    // Toggle CSS panel
    const cssCheckbox = screen.getByText('Show CSS Panel');
    fireEvent.click(cssCheckbox);
    
    expect(screen.getByText('CSS Variables')).toBeInTheDocument();
  });

  test('toggles FPS counter', () => {
    render(<UltraCV />);
    
    // Open dev tools
    fireEvent.click(screen.getByLabelText('Toggle developer tools'));
    
    // Toggle FPS
    const fpsCheckbox = screen.getByText('Show FPS Counter');
    fireEvent.click(fpsCheckbox);
    
    // Should show FPS value
    expect(screen.getByText(/fps/i)).toBeInTheDocument();
  });

  test('toggles DOM outlines', () => {
    const { container } = render(<UltraCV />);
    
    // Open dev tools
    fireEvent.click(screen.getByLabelText('Toggle developer tools'));
    
    // Toggle DOM outlines
    const domCheckbox = screen.getByText('Show DOM Outlines');
    fireEvent.click(domCheckbox);
    
    expect(container.firstChild).toHaveClass('debug-dom');
  });

  test('toggles low bandwidth mode', () => {
    const { container } = render(<UltraCV />);
    
    // Open dev tools
    fireEvent.click(screen.getByLabelText('Toggle developer tools'));
    
    // Toggle low bandwidth
    const lowBandwidthCheckbox = screen.getByText('Low Bandwidth Mode');
    fireEvent.click(lowBandwidthCheckbox);
    
    expect(container.firstChild).toHaveClass('low-bandwidth');
  });

  test('terminal pause/play button works', async () => {
    render(<UltraCV />);
    
    // Wait for terminal to render (it's in a section that needs scrolling)
    await waitFor(() => {
      const pauseButton = screen.getByLabelText('Pause terminal');
      expect(pauseButton).toBeInTheDocument();
    });
    
    const pauseButton = screen.getByLabelText('Pause terminal');
    fireEvent.click(pauseButton);
    
    // Should change to play button
    expect(screen.getByLabelText('Play terminal')).toBeInTheDocument();
  });

  test('respects reduced motion preference', () => {
    // Mock reduced motion
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: query === '(prefers-reduced-motion: reduce)',
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));
    
    const { container } = render(<UltraCV />);
    expect(container.firstChild).toHaveClass('reduced-motion');
  });

  test('keyboard navigation works', () => {
    render(<UltraCV />);
    
    // Tab through interactive elements
    const themeButton = screen.getByLabelText('Toggle theme');
    themeButton.focus();
    
    expect(document.activeElement).toBe(themeButton);
  });

  test('skips navigation link exists', () => {
    render(<UltraCV />);
    const skipLink = screen.getByText('Skip to main content');
    expect(skipLink).toHaveAttribute('href', '#main');
  });

  test('all sections are present', () => {
    render(<UltraCV />);
    
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('animated counters exist', () => {
    render(<UltraCV />);
    
    // Counters should render
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Years Experience')).toBeInTheDocument();
    expect(screen.getByText('Happy Clients')).toBeInTheDocument();
  });

  test('project cards render', () => {
    render(<UltraCV />);
    
    expect(screen.getByText('E-Commerce Platform')).toBeInTheDocument();
    expect(screen.getByText('Analytics Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Social Media App')).toBeInTheDocument();
  });

  test('skill bars render', () => {
    render(<UltraCV />);
    
    expect(screen.getByText('React / Next.js')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Tailwind CSS')).toBeInTheDocument();
  });

  test('contact form renders', () => {
    render(<UltraCV />);
    
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
    expect(screen.getByText('Send Message')).toBeInTheDocument();
  });

  test('footer renders with social links', () => {
    render(<UltraCV />);
    
    expect(screen.getAllByRole('link')).toHaveLength(5); // Social links + skip link
  });
});
