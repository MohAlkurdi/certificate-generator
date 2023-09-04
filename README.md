# Certificate Generator

## Description

a web application designed to create certificates for different occasions. This can be useful for generating certificates for events, courses, or workshops, among other things.

### Installation

1. Clone the repository:

```shell
   git clone https://github.com/MohAlkurdi/certificate-generator.git
```

2. Navigate to the project directory:

```shell
cd certificate-generator
```

3. Install the project dependencies:

```shell
pnpm i
```

4. Run dev server:

```shell
pnpm dev
```

Development server should run on port 3004

---

## How to use it?

1. **Add Certificate Template:**

- Add your certificate to the image folder.

2. **Customize Certificate Fields:**

- Edit the fields to your specification in the `public/index.html` file.

3. **Handle Input Data:**

- Get your input response from the request body in `src/index.ts` file.

4. **Configure Certificate Settings:**

- Set the image name and font size (if you want to change them).
- Finally, set the text style, color, width and height etc...
