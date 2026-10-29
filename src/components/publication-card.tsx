import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight, FileText } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  authors: string;
  venue: string;
  venueHref?: string;
  status: string;
  description: string;
  tags: readonly string[];
  links?: readonly {
    type: string;
    href: string;
  }[];
  className?: string;
}

export function PublicationCard({
  title,
  authors,
  venue,
  venueHref,
  status,
  description,
  tags,
  links,
  className,
}: Props) {
  const primaryHref = links && links.length > 0 ? links[0].href : undefined;

  return (
    <div
      className={cn(
        "flex flex-col h-full border border-border rounded-xl overflow-hidden p-6 gap-3 hover:ring-2 hover:ring-muted transition-all duration-200",
        className
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex flex-col gap-1.5 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            {venueHref ? (
              <Link
                href={venueHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {venue}
              </Link>
            ) : (
              <span className="text-xs font-medium text-muted-foreground">
                {venue}
              </span>
            )}
            <Badge
              className="text-[11px] font-medium border border-border h-5 w-fit px-2"
              variant="outline"
            >
              {status}
            </Badge>
          </div>
          {primaryHref ? (
            <Link
              href={primaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold leading-snug hover:underline underline-offset-4"
            >
              {title}
            </Link>
          ) : (
            <h3 className="font-semibold leading-snug">{title}</h3>
          )}
        </div>
        {primaryHref && (
          <Link
            href={primaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors flex-none"
            aria-label={`Open ${title}`}
          >
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        )}
      </div>

      <p className="text-xs text-muted-foreground leading-relaxed">{authors}</p>
      <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
        <Markdown>{description}</Markdown>
      </div>

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              key={tag}
              className="text-[11px] font-medium border border-border h-6 w-fit px-2"
              variant="outline"
            >
              {tag}
            </Badge>
          ))}
        </div>
      )}

      {links && links.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto pt-1">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.type}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Badge
                className="flex items-center gap-1.5 text-xs"
                variant="default"
              >
                <FileText className="size-3" aria-hidden />
                {link.type}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
