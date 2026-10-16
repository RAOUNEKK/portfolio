import letterA1 from "@/assets/things/letter-a-1.jpg";
import letterC1 from "@/assets/things/letter-c-1.jpg";
import letterE1 from "@/assets/things/letter-e-1.jpg";
import letterE2 from "@/assets/things/letter-e-2.jpg";
import clip13 from "@/assets/things/clip-13.png";
import clip18 from "@/assets/things/clip-18.png";
export function WelcomeCollage() {
  return (
    <section
      className="welcome-collage mx-auto max-w-7xl px-4 pb-5 pt-8 md:pt-12"
      aria-label="Welcome"
    >
      <div className="welcome-paper relative overflow-visible rounded-[28px] px-5 py-7 md:px-10 md:py-9">
        <img src={clip13} alt="" className="welcome-clip welcome-clip-a" aria-hidden="true" />
        <img src={clip18} alt="" className="welcome-clip welcome-clip-b" aria-hidden="true" />

        <div className="welcome-collage-letters" aria-hidden="true">
          <img src={letterA1} alt="" className="welcome-letter letter-a" />
          <img src={letterC1} alt="" className="welcome-letter letter-c" />
          <img src={letterE1} alt="" className="welcome-letter letter-e1" />
          <img src={letterE2} alt="" className="welcome-letter letter-e2" />
        </div>

        <div className="relative z-10 max-w-5xl">
          <div className="welcome-kicker">A LITTLE NOTE BEFORE WE START</div>
          <h2 className="welcome-title">
            Welcome to my <span className="welcome-word">creative</span> corner.
          </h2>
          <p className="welcome-copy">
            Come in, look around, and let&apos;s turn an idea into something{" "}
            <span>useful, expressive, and beautifully made.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
