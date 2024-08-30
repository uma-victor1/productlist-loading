# PostList Component

## Description

The `PostList` component is a React component built with TypeScript that fetches a list of posts from a mock API (`https://jsonplaceholder.typicode.com/posts`) and displays them in a styled, responsive list. Each post is shown with its title and a brief excerpt from the body text.

## Files

- **PostList.tsx**: The main React component file that handles data fetching, state management, and rendering of the post list.
- **PostList.css**: Basic CSS styling for the `PostList` component, ensuring a visually appealing and responsive layout.

## Installation

1. **Add the Component:**

   - Place the `PostList.tsx` file in your components directory (e.g., `src/components/`).

2. **Add the CSS:**

   - Place the `PostList.css` file in your styles directory (e.g., `src/styles/`) and import it in your main stylesheet or directly in the component file.

3. **Integration:**
   - Import the `PostList` component into your desired React component or page:
     ```tsx
     import PostList from "./components/PostList";
     ```
   - Use the `PostList` component in your JSX:
     ```tsx
     const App = () => (
       <div>
         <h1>Post List</h1>
         <PostList />
       </div>
     );
     export default App;
     ```

## Usage

Once integrated, the `PostList` component will fetch and display posts automatically when rendered. The component includes basic error handling and loading state management.

## Notes

- Ensure your project is set up to handle TypeScript files (`.tsx`).
- The component is styled with basic CSS, which you can customize further to fit your application's design requirements.
