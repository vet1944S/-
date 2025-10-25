# System Patterns: Svetlana Chernykh Photography Landing Page

## System Architecture

### Architecture Type
- **Static Website Architecture**: Single-page application with no server-side processing
- **Client-Side Rendering**: All content rendered in browser using HTML/CSS
- **Asset-Based**: Content delivered as static files (HTML, CSS, images)

### Component Structure
```
Landing Page
├── Navigation (Sticky Header)
├── Hero Section (Full-screen background)
├── About Section (Profile + description)
├── Portfolio Section (Grid-based galleries)
│   ├── Kindergarten Group
│   ├── Elementary School Group
│   └── High School Group
└── Contact Section (Form + social links)
```

## Key Technical Decisions

### Design Patterns Used

#### CSS Architecture
- **CSS Variables**: Centralized color scheme and typography
  ```css
  :root {
    --primary-color: #F5F5DC;
    --secondary-color: #D2B48C;
    --text-color: #333;
  }
  ```
- **Mobile-First Responsive Design**: Base styles for mobile, enhanced for larger screens
- **Component-Based CSS**: Scoped styles for each major section

#### Layout Patterns
- **CSS Grid**: Portfolio galleries with consistent 3-column layout
- **Flexbox**: Navigation, hero content, and section alignments
- **Container Pattern**: Max-width containers with responsive padding

### Performance Patterns
- **Image Optimization**: Direct JPG usage without processing
- **Minimal HTTP Requests**: Single HTML file, embedded CSS
- **Font Loading**: Preconnect to Google Fonts for faster loading

## Design Patterns

### Visual Hierarchy
- **Typography Scale**: Consistent heading sizes using clamp() for responsiveness
- **Color Psychology**: Warm colors (beige, brown) for trust and approachability
- **Spacing System**: Consistent padding/margins using rem units

### Interaction Patterns
- **Hover Effects**: Subtle animations on portfolio items and buttons
- **Smooth Scrolling**: CSS `scroll-behavior: smooth` for navigation
- **Focus States**: Accessible form interactions

### Content Organization
- **Progressive Disclosure**: Portfolio organized by age groups
- **Visual Grouping**: Individual vs general covers clearly separated
- **Clear CTAs**: Prominent contact button and social media links

## Component Relationships

### Navigation Flow
- Sticky navigation provides constant access to sections
- Smooth scrolling enhances user experience
- Logo serves as home anchor

### Content Flow
- Hero → About → Portfolio → Contact (logical user journey)
- Portfolio categories build from youngest to oldest age groups
- Contact options provided at multiple touchpoints

## Critical Implementation Paths

### Responsive Breakpoints
- **Mobile (< 768px)**: Single column layouts, stacked elements
- **Desktop (≥ 769px)**: Multi-column grids, side-by-side layouts
- **Tablet (768px - 1024px)**: Intermediate layouts using flexbox

### Image Handling
- **Aspect Ratio**: Consistent 1:1 ratio for portfolio items
- **Object Fit**: `cover` for consistent display across orientations
- **Alt Text**: Descriptive alt attributes for accessibility

### Form Implementation
- **Semantic HTML**: Proper form structure with labels
- **Validation**: HTML5 required attributes
- **Accessibility**: Associated labels and focus management

## Error Handling Patterns
- **Graceful Degradation**: Works without JavaScript
- **Font Fallbacks**: System fonts if Google Fonts fail to load
- **Image Fallbacks**: Alt text displays if images don't load

## Maintenance Patterns
- **Modular CSS**: Easy to update individual sections
- **Semantic HTML**: Clear structure for content updates
- **Asset Organization**: Logical naming convention for portfolio images
