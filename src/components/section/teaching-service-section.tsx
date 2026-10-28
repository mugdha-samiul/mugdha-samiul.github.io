import BlurFade from "@/components/motion/blur-fade";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function TeachingServiceSection() {
  return (
    <div className="flex min-h-0 flex-col gap-y-8">
      <div className="flex min-h-0 flex-col gap-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <h2 className="text-xl font-bold">Teaching</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 15}>
          <div className="flex flex-col gap-3">
            {DATA.teaching.courses.map((course) => (
              <div
                key={course.title}
                className="flex items-baseline justify-between gap-x-3"
              >
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="text-sm font-medium leading-snug">
                    {course.title}
                  </span>
                  <span className="font-sans text-xs text-muted-foreground">
                    {course.institution}
                  </span>
                </div>
                <span className="text-xs tabular-nums text-muted-foreground text-right flex-none">
                  {course.dates}
                </span>
              </div>
            ))}
            <ul className="list-disc pl-5 flex flex-col gap-1 pt-1">
              {DATA.teaching.curriculum.map((item) => (
                <li key={item} className="text-xs text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </BlurFade>
      </div>

      <div className="flex min-h-0 flex-col gap-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <h2 className="text-xl font-bold">Service</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 17}>
          <div className="flex flex-col gap-3">
            {DATA.service.map((item) => (
              <div
                key={item.role}
                className="flex items-baseline justify-between gap-x-3"
              >
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="text-sm font-medium leading-snug">
                    {item.role}
                  </span>
                  <span className="font-sans text-xs text-muted-foreground">
                    {item.institution}
                  </span>
                  {"description" in item && item.description && (
                    <span className="font-sans text-xs text-muted-foreground">
                      {item.description}
                    </span>
                  )}
                </div>
                <span className="text-xs tabular-nums text-muted-foreground text-right flex-none">
                  {item.dates}
                </span>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
