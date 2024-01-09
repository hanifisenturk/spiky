# Spiky.AI Quiz App

This is a minimal quiz application created for the Spiky.AI case project. The app enables users to answer random questions generated by OPENAI.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

1. **Randomly Generated Questions:**

   - Questions for the quiz are dynamically generated by OPENAI.

2. **Progress Animation:**

   - Users can visually track their progress through the quiz with a smooth and appealing animation.

3. **Answer Status Indicators:**

   - Users receive immediate feedback on the correctness of their answers with green (correct) and red (incorrect) color indicators.

4. **Confetti Animation for High Scores:**

   - Users scoring 300 points or more will be treated to a celebratory confetti animation on the result screen.

5. **Interactive Sound Effects:**

   - Enjoy interactive sound effects, such as a unique sound for correct and incorrect answers, enhancing the user experience.

6. **Comedy Music Option:**

   - Users have the option to play lighthearted comedy music throughout the entire quiz session.

7. **Toggleable Music and Audio Effects:**

   - Users can conveniently switch between enabling or disabling both the background music and sound effects using a modal.

8. **Modal Controls:**

   - Users can open the modal for music and audio effects control using the keyboard shortcut CTRL+M.
   - The modal can be closed either by pressing ESC or by clicking on the modal backdrop.

9. **Restart Quiz or Start New Quiz:**

   - Users can choose to restart the current quiz for a fresh attempt or start a new quiz.

10. **PWA Support:**

    - Supporting PWA for a better user experience. No installations required.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- Before you begin, ensure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/) - Make sure you have Node.js installed to run the Next.js application.

- [Yarn](https://yarnpkg.com/) - Yarn is used as the package manager for this project.

### Installation

**Clone the repository:**

```bash
git clone git@github.com:hanifisenturk/spiky.git
```

**Navigate to the project folder:**

```bash
cd spiky
```

**Create a .env file:**

```bash
cp .env.example .env
```

**Create an OPENAI API KEY**

[OPENAI documentation link](https://platform.openai.com/docs/quickstart?context=node)

**Install dependencies using Yarn:**

```bash
yarn install
```

**Start the development server:**

```bash
yarn dev
```

# Technologies Used

The Spiky.AI Quiz App is built using the following technologies:

1. **Next.js 14.0.4:** The app utilizes the latest version of Next.js, including the app router.

2. **Tailwind CSS:** Tailwind CSS is employed for a utility-first CSS approach, providing a flexible and responsive design for the quiz app.

3. **SWR (Stale-While-Revalidate):** SWR is utilized for efficient data fetching, offering a seamless user experience by automatically revalidating data in the background.

4. **Tailwind Merge:** Tailwind Merge is used to extend Tailwind CSS with additional utility classes, enhancing the styling capabilities of the app.

5. **OpenAI Package:** The app leverages the OpenAI package for generating random questions dynamically, contributing to a diverse and engaging quiz experience.

6. **React Confetti:** The React Confetti library is integrated to add a delightful confetti animation for users scoring 300 points or more in the quiz.

7. **Husky with Prettier:** Husky and Prettier are employed for code formatting and ensuring consistent code quality, enhancing the maintainability of the project.

8. **lint-staged:** lint-staged is used in conjunction with Husky to run pre-commit hooks on staged files, ensuring that only properly formatted and linted code is committed.

Feel free to customize this list based on any additional technologies or libraries you've used in your project.

## Contributing

We welcome contributions from the community to enhance the Spiky.AI Quiz App! Whether you find a bug, have a feature request, or want to contribute code, please follow the guidelines below.

### How to Contribute

1. Fork the repository and create your branch from `main`.

2. Clone your forked repository to your local machine:

   ```bash
   git clone https://github.com/your-username/spiky-ai-quiz.git
   ```

3. Create a new branch with a descriptive name:

```bash
 git checkout -b your-feature
```

4. Make your changes, add your features, or fix the bug.

5. Test your changes locally to ensure they work as expected.

6. Commit your changes and push to your fork:

```bash
 git add .
 git commit -m "Your descriptive commit message"
 git push origin your-feature
```

7. Open a pull request (PR) to the main branch of the original repository.

8. Ensure your PR includes a clear description of the changes you made and any relevant information for reviewers.

## License

By contributing to this project, you agree that your contributions will be licensed under the project's [License](https://github.com/hanifisenturk/spiky/blob/main/LICENSE).

Thank you for contributing to the Spiky.AI Quiz App!
