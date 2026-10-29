import BlurFade from "@/components/motion/blur-fade";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function ResearchInterestsSection() {
  return (
    <div className="flex min-h-0 flex-col gap-y-4">
      <BlurFade delay={BLUR_FADE_DELAY * 9}>
        <h2 className="text-xl font-bold">Research Interests</h2>
      </BlurFade>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 auto-rows-fr">
        {DATA.researchInterests.map((interest, id) => (
          <BlurFade
            key={interest.title}
            delay={BLUR_FADE_DELAY * 10 + id * 0.05}
            className="h-full"
          >
            <div className="group flex flex-col h-full gap-2 border border-border rounded-xl p-5 bg-background transition-all duration-300 ease-out hover:-translate-y-1 hover:border-foreground/25 hover:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.25)] dark:hover:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.6)]">
              <h3 className="font-semibold text-sm leading-snug transition-colors group-hover:text-foreground">
                {interest.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {interest.description}
              </p>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
