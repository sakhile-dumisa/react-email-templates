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
  lastName: string;
  unsubscribeUrl?: string;
}

export const SubscriptionConfirmationEmail = ({ 
  firstName = "there", 
  lastName = "",
  unsubscribeUrl = "https://www.sakhiledumisa.com/unsubscribe"
}: Props) => {
  const fullName = lastName ? `${firstName} ${lastName}` : firstName;

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
      <Preview>You are now subscribed to Sakhile's newsletter.</Preview>
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
              <Heading className="text-black text-base font-semibold leading-tight mb-4 text-left">
                Welcome to the list, {fullName}.
              </Heading>

              <Text className="text-[#444444] text-sm leading-relaxed mb-6 text-left font-normal">
                Your subscription is confirmed. You will receive a clean, high-signal 
                notification whenever a new technical essay, micro-insight, or 
                architectural breakdown drops. No fluff, no noise.
              </Text>

              {/* Primary Call to Action Button */}
              <Section className="text-left mt-2 mb-8">
                <Button
                  href="https://www.sakhiledumisa.com/blog"
                  className="bg-black text-white text-xs font-medium px-5 py-3 rounded-md no-underline inline-block"
                >
                  Explore the Blog Portfolio →
                </Button>
              </Section>

              {/* Explicit Compliance & Control Footer */}
              <Section className="border-t border-solid border-[#eeeeee] pt-6 mt-8">
                <Text className="text-[#868686] text-xs leading-relaxed mb-4 text-left">
                  You received this email because you subscribed at{" "}
                  <Link href="https://www.sakhiledumisa.com" className="text-[#868686] underline">
                    sakhiledumisa.com
                  </Link>
                  . If this was a mistake or you wish to opt out, you can cleanly change your preferences below.
                </Text>
                
                {/* Secondary Unsubscribe Button */}
                <Section className="text-left">
                  <Button
                    href={unsubscribeUrl}
                    className="bg-[#f4f4f5] text-[#3f3f46] text-[11px] font-medium px-3 py-2 rounded no-underline inline-block border border-solid border-[#e4e4e7]"
                  >
                    Unsubscribe
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

export default SubscriptionConfirmationEmail;