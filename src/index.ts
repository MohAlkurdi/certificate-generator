// Import dependencies
import PDFDocument from "pdfkit";
import express, { Express, Request, Response } from "express";

const app: Express = express();

const PORT: number = 3004;

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.post("/", (req: Request, res: Response) => {
  const doc: PDFKit.PDFDocument = new PDFDocument({
    layout: "landscape",
    size: "A4",
  });

  // Extract name from the request body
  const name: string = req.body.name;

  // Set response headers for the PDF attachment
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    //If you want a constant name for all the pdf, remove the name variable and add what ever you want
    "attachment; filename=" + encodeURI(`${name}.pdf`)
  );

  doc.pipe(res); // Pipe the PDF content to the response object

  // Draw the certificate image at the specified position and width
  doc.image("image/certificate.png", 0, 0, { width: 842 });

  // Set the font for the PDF content
  doc.font("fonts/Cairo-Regular.ttf");

  // Draw the student's name on the certificate with specified settings
  doc
    .fontSize(23)
    .fillColor("gray") // Text color
    .text(name, 20, 265, {
      align: "center",
      features: ["rtla"], // Support RTL text
    });

  doc.end(); // Finalize the PDF document
});

// Host the front end by serving static files from the "public" directory
app.use(express.static("public"));

app.listen(PORT, () => {
  // Start the server and log a message to the console
  console.log(`Example app listening at http://localhost:${PORT}`);
});
