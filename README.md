# Godfred Opoku Ababio portfolio

Responsive static HTML, CSS, and JavaScript website for a UCLA Ph.D. candidate in Civil and Environmental Engineering, specializing in Structural & Earthquake Engineering.

## Preview

Open `index.html`, or run `python -m http.server 8000` from this directory and visit `http://localhost:8000`.

## Content and source

Academic content is based on `assets/documents/Ababio_CV.docx`. The original Word document is linked from the CV section without modification. The site includes education, research interests, research experience, teaching, mentoring, awards, volunteering, one published article, two manuscripts explicitly in preparation, and four conference presentations.

The four main research cards describe connected areas within the CV's integrated seismic risk, recovery, and risk-sharing program (2023–present). The earlier machine-learning project (2022–2023) appears separately. Card headings are descriptive summaries of the CV, not formal grant or project titles. The Ph.D. is shown as expected in 2027, consistent with current candidate status.

The published article DOI and volume were verified against the publisher: https://doi.org/10.1016/j.ijdrr.2026.106177. No publication date is asserted for the in-preparation manuscripts.

## Photographs and captions

The homepage uses `assets/images/profile.JPG`. Seven conference images in `assets/images/presentations/` are displayed under Publications. Captions identify the conference, location, and month/year using filenames and matching CV presentation entries: 13NCEE (Portland, July 2026), NHERI SimCenter Symposium (Berkeley, May 2026), and SEAOC Convention (San Diego, September 2025).

Two photos in `assets/images/volunteering/` illustrate the American Red Cross event (Pacific Palisades, July 2026) and Los Angeles Regional Food Bank event (Los Angeles, August 2026). The Skid Row entry remains text-only because no corresponding photo was supplied.

Original photos are preserved. Presentation and volunteer images use lazy loading and their natural aspect ratios; no subjects, slides, or posters are cropped in the galleries. Selecting a gallery photo opens a native dialog with the event caption, next/previous navigation, arrow-key controls, and Escape-to-close. Focus returns to the originating link. Without JavaScript the link opens the original image.

When adding a future event, include a visible caption with its verified name, location, and date. Add the image under the appropriate existing folder and use its exact filename, including case, since GitHub Pages is case-sensitive.

## Optional PDF CV

To provide a PDF instead of Word, place an exported PDF in `assets/documents/`, update the CV link and its download filename, and change the visible format labels to PDF. Do not rename the DOCX extension to PDF.

## Files

- `index.html`: page content and all ten requested sections.
- `assets/css/style.css`: design and responsive layouts.
- `assets/js/main.js`: mobile menu and navigation tracking.
- `assets/images/`: original conceptual SVG illustrations.
- `assets/documents/Ababio_CV.docx`: supplied original CV.
- `.nojekyll`: plain static GitHub Pages hosting.
- `CHECKS.md`: verification scope and remaining content.

## GitHub Pages

Commit and push the files to the root of `Godfred-oops.github.io`. In **Settings > Pages**, select **Deploy from a branch**, choose the branch containing these files (usually `main`), and choose **/ (root)**. Once deployment completes, visit `https://godfred-oops.github.io/`.

Relative asset paths support project repository subpaths too. No build step, backend, package manager, or external font service is needed.

## Accessibility

Semantic landmarks, a skip link, visible keyboard focus, a keyboard-accessible mobile menu, Escape-to-close, native project disclosures, reduced-motion support, and navigation available without JavaScript.

## Research illustrations

The four research cards display static PNG exports of the original SVGs in `assets/images/research/`: neighborhood retrofit activity, a conceptual foundation retrofit comparison, functional recovery stages, and household contributions/claims in a reciprocal exchange. They share the homepage field-note style. Each SVG explicitly labels its schematic status and contains no invented research measurements. The homepage displays `assets/images/research-sketch.png`. SVG originals are retained as editable sources. All five displayed illustrations are non-animated PNG images.

## Personal identity

The header, browser favicon, and footer use the supplied `assets/images/adinkra.png` artwork. The original image is unchanged. Accessible link labels retain the owner’s name; repeated decorative emblem images use empty alt text.
