interface Props {
  image?: string;
  title: string;
  subTitle: string;
}

export function TrackInfo({ title, subTitle }: Props) {
  return (
    <div className="flex items-center gap-3">
      <div className="size-12 bg-white/30 border border-primary rounded-full" />
      <div>
        <div className="text-white text-lg font-medium">{title}</div>
        <div className="opacity-60">{subTitle}</div>
      </div>
    </div>
  );
}
