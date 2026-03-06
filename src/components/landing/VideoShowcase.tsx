import { useState, useRef, useCallback } from "react";
import { Volume2, VolumeX, Play } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

type VideoCategory = "Pattern Interrupt" | "Pixar Style" | "Promotional" | "Before/After" | "CGI" | "Animated";

interface VideoItem {
  id: string;
  category: VideoCategory;
  src: string; // placeholder — will be replaced with real URLs
  poster?: string;
  aspectRatio: "9/16" | "1/1" | "4/5" | "16/9";
}

// Placeholder videos — user will upload real ones
const placeholderVideos: VideoItem[] = [
  { id: "1", category: "Pattern Interrupt", src: "", aspectRatio: "9/16" },
  { id: "2", category: "Pixar Style", src: "", aspectRatio: "9/16" },
  { id: "3", category: "Promotional", src: "", aspectRatio: "1/1" },
  { id: "4", category: "Before/After", src: "", aspectRatio: "9/16" },
  { id: "5", category: "CGI", src: "", aspectRatio: "4/5" },
  { id: "6", category: "Animated", src: "", aspectRatio: "9/16" },
];

const categories: VideoCategory[] = ["Pattern Interrupt", "Pixar Style", "Promotional", "Before/After", "CGI", "Animated"];

function VideoCard({ video, isPlaying, onPlay }: { video: VideoItem; isPlaying: boolean; onPlay: (id: string) => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const handlePlay = useCallback(() => {
    onPlay(video.id);
    if (videoRef.current) {
      videoRef.current.muted = false;
      setMuted(false);
      videoRef.current.play();
    }
  }, [video.id, onPlay]);

  const toggleMute = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  }, []);

  // When another video plays, mute this one
  if (!isPlaying && videoRef.current && !videoRef.current.muted) {
    videoRef.current.muted = true;
    setMuted(true);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-colors group cursor-pointer snap-start shrink-0 w-[220px] md:w-auto"
      style={{ aspectRatio: video.aspectRatio }}
      onClick={handlePlay}
    >
      {/* Placeholder gradient when no video src */}
      {!video.src ? (
        <div className="absolute inset-0 bg-gradient-to-br from-card via-muted to-card flex flex-col items-center justify-center gap-2">
          <Play className="w-10 h-10 text-primary opacity-60" />
          <span className="font-heading text-sm text-muted-foreground">{video.category}</span>
        </div>
      ) : (
        <video
          ref={videoRef}
          src={video.src}
          poster={video.poster}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
      )}

      {/* Category pill */}
      <div className="absolute top-2 left-2 bg-background/80 backdrop-blur-sm border border-border rounded-full px-2.5 py-0.5">
        <span className="font-body text-[10px] text-primary font-medium">{video.category}</span>
      </div>

      {/* Mute/Unmute button */}
      {video.src && (
        <button
          onClick={toggleMute}
          className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:border-primary transition-colors"
          aria-label={muted ? "Unmute" : "Mute"}
        >
          {muted ? (
            <VolumeX className="w-4 h-4 text-muted-foreground" />
          ) : (
            <Volume2 className="w-4 h-4 text-primary" />
          )}
        </button>
      )}
    </motion.div>
  );
}

export default function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<VideoCategory | null>(null);

  const filtered = activeCategory
    ? placeholderVideos.filter((v) => v.category === activeCategory)
    : placeholderVideos;

  return (
    <section className="py-10 md:py-16 px-5 md:px-8 lg:px-16">
      <SectionHeading label="OUR WORK" title="SCROLL-STOPPING CREATIVES" />

      {/* Category filter pills */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-6 scrollbar-hide">
        <button
          onClick={() => setActiveCategory(null)}
          className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-body font-medium border transition-colors ${
            !activeCategory
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-transparent text-muted-foreground border-border hover:border-primary/50"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-body font-medium border transition-colors ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-transparent text-muted-foreground border-border hover:border-primary/50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Video grid — horizontal scroll on mobile, grid on desktop */}
      <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-4 md:grid md:grid-cols-3 lg:grid-cols-4 md:overflow-visible scrollbar-hide">
        {filtered.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            isPlaying={activeVideo === video.id}
            onPlay={setActiveVideo}
          />
        ))}
      </div>

      <div className="section-divider mt-10" />
    </section>
  );
}
