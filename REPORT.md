# Project Report

## Approach and Order of Work

I began by reviewing the desktop mockup and breaking the page into its main content sections: the image-based hero, intro copy, collections area, video-style nature section, brochure CTA, required contact form, lifestyle image row, and footer/legal area.

After identifying the structure, I set up the project using Vite, Bootstrap, and SCSS. I built the semantic HTML first so the content order was clear, then used Bootstrap's grid system and custom SCSS to match the visual direction of the design. I used the Figma export package as the main visual reference for frame size, imagery, and proportions.

Once the base desktop layout was working, I implemented the two written changes that were not reflected directly in the mockup: the three-column collections revision and the new lead capture form section. I then added the server-side form validation endpoint, tested the form responses, checked the responsive layout at smaller breakpoints, and deployed the finished project to Vercel.

## AI Usage

I used AI as a development assistant for:

1. Interpreting the assignment requirements and turning them into an implementation checklist.
2. Extracting and organizing usable assets from the provided PDF/Figma export package.
3. Drafting parts of the Bootstrap/SCSS structure and reviewing responsive layout decisions.
4. Debugging build/deployment issues and checking the server-side form endpoint.
5. Helping organize this written report so it addressed each requested point clearly.

Work I handled through my own judgment included:

1. Deciding the final page structure and section order.
2. Choosing how the layout should adapt on tablet and mobile.
3. Designing the unmocked contact form section to fit the existing visual language.
4. Interpreting the collections revision and creating a matching third collection.
5. Reviewing the page visually and deciding which adjustments were necessary before submission.

## Independent Decisions

1. I kept the desktop hero as a strong image grid because the mockup relies heavily on photography and brand atmosphere. On mobile, I simplified the hero so the layout stays readable and does not become a cramped collage.

2. I converted the collections area into three equal Bootstrap columns on desktop, then allowed the cards to stack naturally on smaller screens. This keeps the requested three-column desktop revision while preserving readability on mobile.

3. I created a third "Summit Collection" card using the same visual pattern as the existing collections: image first, pricing line, uppercase collection name, specs, and short descriptive copy. I chose this approach so the new card felt intentional instead of visually bolted on.

4. I placed the contact form directly after the brochure CTA because that is where the user has already been prompted to take action. This makes the lead capture section feel like a natural continuation of the page.

5. I used a Vercel serverless function for the form because it satisfies the server-side validation requirement and keeps deployment straightforward for a static front-end project.

## Design Revision

The original mockup showed the collections content in a two-item layout. I interpreted the requested revision as a client change that needed to preserve the established design style while changing the content structure.

I converted the area into a three-column layout using Bootstrap columns. Each collection card uses the same muted background, home image, typography style, pricing/spec hierarchy, and spacing. Since no third collection details were provided, I designed a third collection that matched the tone and structure of the first two rather than introducing a different visual style.

## Contact Form Section

The contact form was not mocked up, so I designed it to feel connected to the existing page rather than like a separate plugin or generic form. I used the same calm neutral palette, uppercase heading style, generous spacing, and gold accent color used elsewhere in the page.

The form includes full name, email address, type of inquiry, message, and a submit button. It is connected to a server-side endpoint that validates all fields and returns either a success message or clear validation errors to the user.

## Questions Documented During Development

1. Should the third collection use official Shea Homes data or should I create matching placeholder content?

   I resolved this by creating a third collection that clearly matches the style of the existing two collections. Since the written direction asked for a third collection but did not provide official details, I treated this as a design/content interpretation task.

2. Should the contact form store submissions in a database, send an email, or connect to a CRM?

   I resolved this by implementing the required server-side validation and user feedback. If this were a production project, I would ask which CRM, email service, or database should receive the lead data.

3. Should the video preview actually play a video?

   I resolved this by matching the mockup as a visual video preview with an accessible play-style button. I would connect it to the final approved video source if one were provided.

4. Should the mobile hero preserve all desktop images?

   I resolved this by simplifying the mobile hero and prioritizing the strongest lifestyle image. This prevents the first screen from feeling crowded on small devices.

5. Should the footer legal copy exactly match the final legal language?

   I resolved this by including concise legal/footer language in the same visual position. In a real client project, I would request the approved legal copy before launch.

6. Should the brochure button trigger a download or lead capture?

   I resolved this by linking the brochure CTA to the contact form section, because the assignment specifically requested a lead capture section between the brochure button and the image row.

## Time Spent

Total time spent: 6 hours.
