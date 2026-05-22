# Project Report

## Approach

I started by reviewing the provided desktop design and identifying the major sections: the visual hero, introductory copy, home collections, video-style nature band, brochure call-to-action, lifestyle image row, and footer. I used the Figma export package as the source of truth for the page frame size, image assets, and overall section proportions. From there I built the page structure in semantic HTML, set up Bootstrap as the layout foundation, and wrote the visual styling in SCSS.

After the desktop layout was in place, I worked through the requested changes: converting the collections area into three columns, designing a third collection card, and adding a lead capture section between the brochure button and image row. I finished by adding the server-side contact form endpoint and checking responsive behavior for tablet and mobile sizes.

## AI Usage

I used AI to help translate the visual mockup into an implementation plan, extract and organize image assets from the provided PDF, draft SCSS structure, check responsive layout decisions, and prepare this written report.

I made the final layout decisions, section order, responsive behavior, form content, and interpretation of the unmocked/revised sections based on the design direction and project requirements.

## Independent Decisions

1. I kept the opening hero as a visual-first image grid on desktop, then simplified it on mobile so the main lifestyle image remains the strongest first impression without creating a cramped collage.

2. I changed the collections section into three equal Bootstrap columns on desktop, then allowed the cards to stack naturally on smaller screens for readability.

3. I designed the contact form as a restrained, warm-gray section with a gold top rule so it feels connected to the brochure CTA and the existing neutral/gold visual language.

4. I used a Vercel serverless API endpoint for the form because it satisfies the server-side validation requirement while keeping deployment straightforward.

## Design Revision

The original collections area was interpreted as two feature blocks. I converted it into a three-column card layout using the same typography, muted background, image treatment, pricing/spec format, and concise descriptive copy. For the third collection, I created a matching "Summit Collection" card using an existing home image from the provided assets and copy that follows the tone of the two supplied collections.

## Contact Form Section

Because the form was not mocked up, I placed it directly after the download brochure CTA as requested and treated it as a natural next step for lead capture. The section uses the same calm spacing, uppercase headings, neutral background, and gold accent already present in the page. The form includes full name, email, inquiry type, message, and a submit button. The server-side endpoint validates all fields and returns success or error messages to the user.

## Questions Documented During Development

1. Should the third collection use official Shea Homes data or should I create placeholder content to match the visual system?

   I resolved this by creating a clearly matching third collection for the test build, since the written instruction asked me to add a third collection without providing official details.

2. Should the contact form submit to a CRM, email service, or database?

   I resolved this by implementing server-side validation and user feedback, which meets the minimum requirement. I would connect it to the preferred CRM or database in a production build.

3. Should the video preview be functional or only visual?

   I resolved this by matching the mockup as a visual video preview with an accessible play button. In production, I would connect it to the final approved video source.

4. Should the mobile version preserve every desktop image in the hero?

   I resolved this by prioritizing the strongest lifestyle image on small screens and hiding the secondary hero images to improve load, focus, and readability.

## Time Spent

Total time spent: 6 hours.
