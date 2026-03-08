import { useState, useRef, useCallback, useEffect } from "react";
import { Volume2, VolumeX, Play, Pause, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const WA_NUMBER = "919130940991";

type VideoCategory = "All" | "CGI" | "Pixar Style" | "Promotional" | "Before/After" | "Animated";

interface VideoItem {
  id: string;
  category: Exclude<VideoCategory, "All">;
  src: string;
  label: string;
}

const videos: VideoItem[] = [
  { id: "1", category: "CGI", src: "/videos/cgi-perfume.mp4", label: "Premium Perfume – CGI Studio" },
  { id: "2", category: "Pixar Style", src: "/videos/pixar-skincare.mp4", label: "Skincare – Pixar Animation" },
  { id: "3", category: "Before/After", src: "/videos/beforeafter-supplement.mp4", label: "Supplement – Before/After" },
  { id: "4", category: "Promotional", src: "/videos/promotional-wellness.mp4", label: "Wellness – Educative UGC" },
  { id: "5", category: "Promotional", src: "/videos/promotional-ghee.mp4", label: "Ghee – Educative Ad" },
  { id: "6", category: "Animated", src: "/videos/ugc-haircare.mp4", label: "Haircare – UGC Style" },
  { id: "7", category: "Promotional", src: "/videos/promotional-perfume.mp4", label: "Perfume – Promotional UGC" },
];

const categories: VideoCategory[] = ["All", "CGI", "Pixar Style", "Promotional", "Before/After", "Animated"];

function VideoCard({
  video,
  activeVideoId,
  onPlay,
}: {
  video: VideoItem;
  activeVideoId: string | null;
  onPlay: (id: string | null) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isActive = activeVideoId === video.id;
  const [playing, setPlaying] = useState(false);

  // When another video becomes active, pause this one
  useEffect(() => {
    if (!isActive && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.muted = true;
      videoRef.current.currentTime = 0;
      setPlaying(false);
    }
  }, [isActive]);

  const handleToggle = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;

    if (isActive && playing) {
      // Pause
      el.pause();
      el.muted = true;
      setPlaying(false);
      onPlay(null);
    } else {
      // Play this one (will auto-pause others via effect)
      onPlay(video.id);
      el.muted = false;
      el.play().catch(() => {});
      setPlaying(true);
    }
  }, [isActive, playing, video.id, onPlay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      className="relative rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-colors group cursor-pointer snap-center shrink-0 w-[160px] sm:w-[180px] md:w-auto h-[280px] sm:h-[320px] md:h-auto"
      style={{ aspectRatio: "9/16" }}
      onClick={handleToggle}
    >
      <video
        ref={videoRef}
        src={`${video.src}#t=0.1`}
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
      />

      {/* Category badge */}
      <div className="absolute top-2 left-2 bg-background/80 backdrop-blur-sm border border-border rounded-full px-2.5 py-0.5">
        <span className="font-body text-[10px] text-primary font-medium">{video.category}</span>
      </div>

      {/* Play/Pause overlay */}
      {!playing && (
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
            <Play className="w-5 h-5 text-primary-foreground ml-0.5" fill="currentColor" />
          </div>
        </div>
      )}

      {/* Mute indicator when playing */}
      {isActive && playing && (
        <button
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center"
          aria-label="Playing with sound"
        >
          <Volume2 className="w-4 h-4 text-primary" />
        </button>
      )}

      {!isActive && (
        <button
          className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center"
          aria-label="Muted"
        >
          <VolumeX className="w-4 h-4 text-muted-foreground" />
        </button>
      )}

      {/* Label */}
      <div className="absolute bottom-2 left-2 right-12 bg-background/70 backdrop-blur-sm rounded px-2 py-1">
        <span className="font-body text-[10px] text-foreground line-clamp-1">{video.label}</span>
      </div>
    </motion.div>
  );
}

export default function VideoShowcase() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<VideoCategory>("All");

  const filtered = activeCategory === "All"
    ? videos
    : videos.filter((v) => v.category === activeCategory);

  return (
    <section className="py-10 md:py-16 px-5 md:px-8 lg:px-16">
      <SectionHeading label="OUR WORK" title="SCROLL-STOPPING CREATIVES" />

      {/* Category filter pills */}
      <div className="flex gap-2 flex-wrap mb-6">
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

      {/* Video grid — horizontal scroll mobile, grid desktop */}
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 lg:grid-cols-4 md:overflow-visible no-scrollbar -mx-5 px-5 md:mx-0 md:px-0">
        {filtered.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            activeVideoId={activeVideoId}
            onPlay={setActiveVideoId}
          />
        ))}
      </div>

      {/* Request Full Portfolio CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 text-center"
      >
        <a
          href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi Mix Media! I'd like to see your full portfolio with more video samples.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-body font-semibold text-sm border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all min-h-[48px]"
          aria-label="Request full portfolio"
        >
          <MessageCircle size={16} />
          Request Full Portfolio
        </a>
      </motion.div>

      <div className="section-divider mt-10" />
    </section>
  );
}
