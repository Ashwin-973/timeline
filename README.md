# Overlay Sticky Pattern - Interactive Scroll Experience

An interactive scroll-based UI component featuring a sticky viewport with animated cards and a progress-tracking sidebar. This project demonstrates advanced scroll interactions using the Intersection Observer API.

## 🎯 Features

- **Sticky Scroll Container**: Cards remain fixed in the viewport while scrolling through triggers
- **Animated Progress Bar**: Visual indicator showing scroll progress through the content
- **Intersection Observer Integration**: Smooth transitions triggered by scroll position
- **Responsive Design**: Adapts layout for mobile (< 640px) and desktop viewports
- **Card Transitions**: Elegant fade and scale animations as cards enter/exit view
- **Track Navigation**: Visual dots indicate current position in the scroll sequence

## 🏗️ Project Structure

```
mini-project-5/
├── index.html      # Main HTML structure
├── style.css       # Styling and responsive design
└── script.js       # Scroll logic and Intersection Observer implementation
```

## 🎨 Design Highlights

### Desktop Layout
- **Two-column grid**: Left sidebar with triggers, right viewport with sticky cards
- **Vertical progress bar**: Grows along the right border of the sidebar
- **Card overlay**: Cards stack and transition in the sticky viewport
- **Active indicators**: Dots scale and glow when their section is active

### Mobile Layout (< 640px)
- **Horizontal navigation**: Track triggers displayed in a sticky horizontal bar
- **Vertical card stack**: Cards displayed in a scrollable column
- **Horizontal progress bar**: Grows along the top of the navigation bar
- **Simplified interactions**: Cards remain visible without overlay effects

## 🔧 Technical Implementation

### Intersection Observer
Two observers monitor different elements:

1. **Trigger Observer**: Monitors `.track-trigger` elements
   - Root margin: `-45% 0px -55% 0px` (triggers near viewport center)
   - Updates active card and navigation state

2. **Card Observer**: Monitors `.card` elements
   - Root margin: `-50% 0% -50% 0%` (triggers at viewport center)
   - Syncs navigation dots with visible cards

### Dynamic Calculations
- `calcScrollDimensions()`: Calculates max scroll height and viewport width
- `calcProgress()`: Updates progress bar based on scroll position
- `updateState()`: Manages card visibility and transition states

## 🎭 Animation States

### Cards
- **Default**: `opacity: 0`, translated down and scaled down
- **Show**: `opacity: 1`, normal position and scale
- **Fade**: `opacity: 0`, translated up and scaled up

### Track Indicators
- **Inactive**: Gray dot, small size
- **Active**: White dot with glow effect, scaled 1.5x

### Track Content
- **Inactive**: 30% opacity
- **Active**: 100% opacity

## 🚀 Usage

1. Open `index.html` in a modern web browser
2. Scroll through the page to see the interactive effects
3. Observe how cards transition and the progress bar updates
4. Resize the window to see responsive behavior

## 📱 Responsive Breakpoints

- **Desktop**: > 640px - Two-column layout with sticky cards
- **Mobile**: ≤ 640px - Single column with horizontal navigation

## 🎨 Color Scheme

- **Background**: `#1A1110` (Dark brown)
- **Card Background**: `#E8F7EE` (Light mint green)
- **Mobile Card**: `rgb(10, 118, 54)` (Dark green)
- **Progress Bar**: Linear gradient from blue (`#3b82f6`) to purple (`#8b5cf6`)
- **Borders**: `#3d3d3d` (Dark gray)

## 🔑 Key Components

### HTML Structure
- `.sticky-scroll-container`: Main container for the scroll experience
- `.track-container`: Sidebar with navigation triggers
- `.track-trigger`: Individual scroll trigger points (4 total)
- `.sticky-viewport-wrapper`: Sticky container for cards
- `.card-container`: Wrapper for overlaying cards
- `.card`: Individual content cards (4 total)

### JavaScript Functions
- `calcScrollDimensions()`: Initializes and updates scroll metrics
- `calcProgress()`: Updates progress bar on scroll
- `triggerCallback()`: Handles trigger intersection events
- `cardCallback()`: Handles card intersection events
- `updateState()`: Updates card visibility states

## 🌟 Use Cases

- Portfolio sections showcase
- Product feature walkthroughs
- Story-telling interfaces
- Timeline presentations
- Multi-step processes

## 📝 Browser Compatibility

Requires modern browsers with support for:
- Intersection Observer API
- CSS Grid
- CSS Custom Properties
- ES6+ JavaScript

## 🎓 Learning Outcomes

This project demonstrates:
- Advanced scroll-based interactions
- Intersection Observer API usage
- Responsive design patterns
- CSS animations and transitions
- State management in vanilla JavaScript
- Performance-optimized scroll handling

