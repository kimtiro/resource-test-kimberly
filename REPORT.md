# Project Report

## Approach and Order of Work

I started by reviewing the provided Figma design and identifying the main sections of the landing page: the image-based hero, intro copy, home collections, video-style nature section, brochure CTA, lifestyle image row, and footer/legal area. I used the Figma export package as the primary visual reference for the page frame, photography, logo assets, and overall style.

After that, I set up the project with Vite, Bootstrap, and SCSS. I built the page structure first with semantic HTML, then organized the styling into SCSS partials for settings, base styles, header/hero, content sections, contact form, footer, and responsive behavior.

Once the base page was in place, I worked through the requirements that were not directly represented in the Figma mockup: the revised three-column collections section, the added third collection, and the unmocked contact form section. I then added the server-side form endpoint, tested the success and error responses, checked responsive behavior, pushed the code to GitHub, and deployed the finished page to Vercel.

## AI Usage

I used AI as a development assistant throughout the project. Specific examples include:

1. Helping interpret the assignment requirements and turn them into an implementation checklist.
2. Helping inspect the PDF/Figma export package and identify usable image assets.
3. Assisting with drafting and organizing the Bootstrap, HTML, SCSS, and JavaScript structure.
4. Helping debug build, GitHub, and Vercel deployment issues.
5. Helping test the server-side form endpoint and confirm both success and validation error responses.
6. Helping organize this written report so that it directly addresses the required submission points.

The final implementation decisions were made by me based on the assignment requirements and the visual direction of the mockup. I decided how to handle the responsive layout, where to place the contact form, how to interpret the collections revision, how to handle the video-style section without a provided video source, and what tradeoffs were appropriate for the deadline.

## Independent Decisions

1. I treated the Figma design as the visual baseline, but followed the written design revision for the collections area. The mockup shows the collections in a two-item horizontal layout, but the written instruction specifically asked for a three-column format with a third collection.

2. I created the third collection as "Summit Collection" and matched the format of the existing collection content: pricing line, uppercase collection name, specs, and short descriptive copy. Since no official third collection copy was provided, I made it clearly consistent with the existing two instead of introducing a different style.

3. I placed the contact form directly after the brochure CTA because that is the point where the user is already being prompted to take action. This made the unmocked form feel like a natural lead-capture step rather than a random inserted section.

4. I used a Vercel serverless function for the form because the assignment required server-side validation. I did not add a database because database storage was listed as a bonus, and I prioritized a stable working form that validates and returns success/error messages.

5. I made the video-style section interactive by opening an accessible media preview modal. No final video URL or video file was provided, so I used the provided animated Figma asset rather than inventing unsupported external video content.

6. I organized the code into separate HTML partials and SCSS partials to make the project easier to review and maintain, while still generating a normal `index.html` for Vite/Vercel.

## Design Revision

The Figma mockup shows the collections area as two horizontal feature blocks. The written revision requested that this area be converted into a three-column format and that a third collection be added.

I interpreted that as a simulated client change after design approval. I kept the visual language from the mockup, including the muted background, home imagery, uppercase collection headings, pricing/spec hierarchy, and restrained spacing, but changed the structure to three cards across on desktop. On smaller screens, the cards stack so the content remains readable.

Because no official third collection details were provided, I created a matching third collection using the same content pattern and tone. In a real project, I would ask the client for approved collection name, pricing, specs, and copy before launch.

## Contact Form Section

The contact form section was not included in the mockup, so I designed it to fit the existing page rather than look like a generic form. I used the same neutral palette, uppercase heading style, spacious layout, and gold accent color already present in the design.

The form includes full name, email address, inquiry type, message, and a submit button. It posts to a Vercel serverless endpoint at `/api/contact`. The endpoint validates all fields server-side and returns either a success response or a validation error response.

There is no database attached. I considered database storage, but the assignment describes that as a bonus. I chose to keep the required functionality stable and complete: server-side validation plus success/error feedback.

## Questions Documented During Development

1. Should the collections section match the Figma exactly or follow the written revision?

   I resolved this by following the written revision. The Figma was used as the style reference, but the layout was changed to three columns because the written instruction explicitly requested that change.

2. What should the third collection be called and what details should it include?

   I resolved this by creating a matching third collection using placeholder-style content that follows the established pattern. In a real project, I would ask for approved naming, pricing, specs, and marketing copy.

3. Should the contact form store leads in a database?

   I resolved this by implementing the required server-side validation and user feedback, without database storage. If this were a production build, I would ask where leads should be stored or sent, such as a CRM, email service, or database.

4. Should the video-style preview play a real video?

   No video source was provided, so I resolved this by creating an interactive media preview using the provided animated Figma asset. This keeps the interaction useful without inventing unsupported content.

5. Should the brochure CTA download a real PDF?

   No brochure file was provided, so I linked the brochure CTA to the lead capture form. This aligns with the requested placement of the contact form between the brochure button and the image row.

6. Should the mobile hero preserve the full desktop collage?

   I resolved this by simplifying the mobile hero so the first screen remains focused and readable. The desktop design uses a large image grid, but on small screens that would become crowded if preserved exactly.

7. Should the footer legal copy exactly match final approved legal language?

   I included concise footer/legal language in the correct area. In a real project, I would request the final approved legal copy before launch.

## Time Spent

Total time spent: 6 hours.
