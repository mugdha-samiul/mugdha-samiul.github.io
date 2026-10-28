import BlurFade from "@/components/motion/blur-fade";
import { PublicationCard } from "@/components/publication-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function PublicationsSection() {
  return (
    <div className="flex min-h-0 flex-col gap-y-8">
      <div className="flex flex-col gap-y-4 items-center justify-center">
        <div className="flex items-center w-full">
          <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
          <div className="border bg-primary z-10 rounded-xl px-4 py-1">
            <span className="text-background text-sm font-medium">
              Publications
            </span>
          </div>
          <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
        </div>
        <div className="flex flex-col gap-y-3 items-center justify-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Papers and preprints
          </h2>
          <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
            Work on LLM-based software testing, LLM evaluation, and trustworthy
            AI.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 max-w-[800px] mx-auto w-full">
        {DATA.publications.map((publication, id) => (
          <BlurFade
            key={publication.title}
            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            className="h-full"
          >
            <PublicationCard
              title={publication.title}
              authors={publication.authors}
              venue={publication.venue}
              venueHref={publication.venueHref}
              status={publication.status}
              description={publication.description}
              tags={publication.tags}
              links={publication.links}
            />
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
