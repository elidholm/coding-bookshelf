# Tech Book Notes

A collection of my notes and reviews on programming, software development, machine learning, and DevOps books.

Visit the live site: <https://elidholm.github.io/coding-bookshelf/>

## About This Project

This repository contains my personal notes, summaries, and reflections on technical books I've read. The content focuses primarily on:

- Software Development
- DevOps and Infrastructure
- Machine Learning and AI
- Computer Science and Algorithms

The website is built with [Astro](https://astro.build) and deployed to [GitHub Pages](https://pages.github.com/).

## Local Development

To run this project locally:

1. Clone the repository
   ```bash
   git clone https://github.com/elidholm/coding-bookshelf.git
   cd coding-bookshelf
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:4321`

## Adding New Book Notes

To add a new book review:

1. Create a new markdown file in `src/pages/books/`
2. Use the following frontmatter template:
   ```markdown
   ---
   layout: ../../layouts/BookLayout.astro
   title: "Book Title"
   author: "Author Name"
   publishDate: "YYYY-MM-DD"
   tags: ["tag1", "tag2", "tag3"]
   coverImage: "/path/to/cover/image.jpg"  # Optional
   link: "https://link-to-book.com"  # Optional
   rating: 5  # 1-5 rating
   summary: "A brief summary of the book"
   ---

   Your book notes and review content here...
   ```

3. Write your notes and review in Markdown format
4. Commit and push your changes

## Deployment

This site automatically deploys to GitHub Pages when changes are pushed to the master branch. The deployment workflow is managed by [GitHub Actions](https://github.com/features/actions) as defined in `.github/workflows/deploy.yml`.

## Technologies Used

- [Astro](https://astro.build) - Static site builder
- [GitHub Pages](https://pages.github.com/) - Hosting
- [GitHub Actions](https://github.com/features/actions) - CI/CD

## License

This project is licensed under the Apache-2.0 - see the [LICENSE](LICENSE) file for details.

## Contact

Feel free to open an issue or submit a pull request if you have any suggestions or improvements!
