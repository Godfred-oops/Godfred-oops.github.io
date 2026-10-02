# Verification and content provenance

## Completed checks after CV integration

- Audited all 53 link and asset references; local anchors resolve, with no broken local links.
- Verified local asset HTTP responses and byte-for-byte agreement with the repository, including the original CV DOCX.
- Verified the published article DOI against the publisher at https://doi.org/10.1016/j.ijdrr.2026.106177.
- Confirmed the email link matches the source CV. A mailto link invokes an email application; message delivery was not tested.
- Confirmed four main research cards, a separate earlier machine-learning project, and all ten requested sections.
- Browser layout checks at 320, 390, 768, and 1440 pixels: no horizontal page overflow or missing images.
- Reviewed the phone homepage and CV download section; tested mobile navigation to the CV.
- No browser console warnings or errors observed during checks.

## Content handling

Source: `assets/documents/Ababio_CV.docx`. The original document is unchanged and downloadable. The Ph.D. is marked expected 2027. Two manuscripts remain clearly in preparation. The four research cards summarize areas of the integrated program listed in the CV; they are not claimed as four separately funded projects. Their 2023–present date denotes the umbrella program. The earlier column-classification project remains separate.

## Remaining material

All ten uploaded photos are integrated: one profile, seven conference, and two volunteer photographs. Professional profile links can be added when supplied. This local review does not confirm a GitHub Pages deployment.

## Photo integration verification

- Inspected all uploaded photographs and matched event filenames to CV entries. Month/year captions use the CV; no unverified day or venue is asserted.
- All 11 displayed images (including the structural SVG) have alternative text. Uploaded raster photographs decode successfully, and every local image path returns HTTP 200.
- Checked layouts at 320, 390, 768, and 1440 pixels after gallery integration: no horizontal overflow.
- Verified captioned full-size viewing, next-photo navigation, Escape-to-close, and focus restoration.
- Verified that switching photos hides the prior image until the newly selected image loads, preventing a temporary image/caption mismatch.
- Visually reviewed the profile, phone volunteering card, and full-size Red Cross photograph with its correct caption.

## Research illustration update

Four card-specific SVGs have valid XML, descriptive alternative text, and working local paths. Browser review confirmed all four load and fit the desktop cards and phone layout without horizontal overflow.

## Static PNG exports

All five illustrations are now displayed as high-resolution PNGs. Each has one frame, returns HTTP 200, and loads in the browser. SVG sources remain available for future edits.

- Research scroll sequence: all four scenes verified in a motion-enabled local fixture; skip link reaches detailed cards. Mobile layouts checked at 390×844 and 320×568, desktop at 1280×800. No horizontal overflow or browser errors. Actual reduced-motion preference verified: sequence hidden, all four detailed cards available. Local asset links and anchors validated; JavaScript syntax checked.
