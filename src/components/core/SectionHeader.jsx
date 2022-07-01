export default function SectionHeader({ title, desc, className }) {
  return (
    <div
      className={`${className} prose mx-auto mb-10 text-center prose-h1:mb-3 prose-h1:leading-tight`}
    >
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
}
