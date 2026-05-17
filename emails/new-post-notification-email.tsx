import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Font,
  Tailwind,
} from "react-email";

interface Props {
  firstName: string;
  blogTitle: string;
  blogDescription: string;
  readingTime: string;
  category: string;
  postUrl: string;
  unsubscribeUrl?: string;
}

export const NewPostNotificationEmail = ({
  firstName = "there",
  blogTitle = "An In-Depth Architectural Breakdown",
  blogDescription = "A deep dive into structural patterns, decoupling legacy layers, and establishing clean data boundaries within modern event-driven environments.",
  readingTime = "5 min read",
  category = "SYSTEM ARCHITECTURE",
  postUrl = "https://www.sakhiledumisa.com/blog",
  unsubscribeUrl = "https://www.sakhiledumisa.com/unsubscribe"
}: Props) => {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <Font
          fontFamily="Space Grotesk"
          fallbackFontFamily="Arial"
          webFont={{
            url: "https://mail.sakhiledumisa.com/space-grotesk.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>New post: {blogTitle}</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              fontFamily: {
                sans: ["'Space Grotesk'", "sans-serif"],
              },
            },
          },
        }}
      >
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="max-w-[600px] mx-auto p-[40px_20px]">
            {/* Header / Brand Identity */}
            <Section className="mb-[32px] text-left">
              <Link href="https://www.sakhiledumisa.com">
                <Img
                  src="https://mail.sakhiledumisa.com/logo.png"
                  width="52"
                  height="52"
                  alt="Logo"
                  className="rounded-lg inline-block"
                />
              </Link>
            </Section>

            {/* Core Content Engine */}
            <Section>
              {/* Category & Metadata Context */}
              <Text className="text-[#868686] text-[11px] font-bold tracking-wider uppercase mb-1 text-left">
                {category} • {readingTime}
              </Text>

              <Heading className="text-black text-xl font-bold leading-snug mb-4 text-left">
                {blogTitle}
              </Heading>

              <Text className="text-[#444444] text-sm leading-relaxed mb-4 text-left font-normal">
                Hello {firstName},
              </Text>

              <Text className="text-[#444444] text-sm leading-relaxed mb-6 text-left font-normal">
                {blogDescription}
              </Text>

              {/* Primary Action Button to read the post */}
              <Section className="text-left mt-2 mb-8">
                <Button
                  href={postUrl}
                  className="bg-black text-white text-xs font-medium px-5 py-3 rounded-md no-underline inline-block"
                >
                  Read the Full Essay →
                </Button>
              </Section>

              {/* Explicit Compliance & Control Footer */}
              <Section className="border-t border-solid border-[#eeeeee] pt-6 mt-8">
                <Text className="text-[#868686] text-xs leading-relaxed mb-4 text-left">
                  You received this email because you are subscribed to updates at{" "}
                  <Link href="https://www.sakhiledumisa.com" className="text-[#868686] underline">
                    sakhiledumisa.com
                  </Link>
                  . 
                </Text>
                
                {/* Secondary Unsubscribe Button */}
                <Section className="text-left">
                  <Button
                    href={unsubscribeUrl}
                    className="bg-[#f4f4f5] text-[#3f3f46] text-[11px] font-medium px-3 py-2 rounded no-underline inline-block border border-solid border-[#e4e4e7]"
                  >
                    Unsubscribe from these updates
                  </Button>
                </Section>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default NewPostNotificationEmail;