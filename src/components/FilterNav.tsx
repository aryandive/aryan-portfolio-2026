// Next.js Link needs to be default imported
import NextLink from 'next/link';

type FilterNavProps = {
  currentCategory: string | undefined;
};

export default function FilterNav({ currentCategory }: FilterNavProps) {
  const getFilterStyles = (filterCategory: string | undefined) => {
    // If filterCategory matches currentCategory (or both are undefined)
    const isActive =
      currentCategory === filterCategory ||
      (currentCategory === undefined && filterCategory === undefined);

    if (isActive) {
      return "text-white border-b-2 border-white pb-4 -mb-[17px] transition-colors uppercase font-semibold";
    }
    return "text-zinc-600 hover:text-zinc-300 pb-4 -mb-[17px] transition-colors uppercase font-semibold";
  };

  return (
    <div className="flex flex-wrap gap-6 mb-10 border-b border-zinc-800 pb-4 text-sm tracking-wide">
      <NextLink href="/" className={getFilterStyles(undefined)}>
        All Projects
      </NextLink>
      <NextLink href="/?category=cloud" className={getFilterStyles("cloud")}>
        Cloud & SaaS
      </NextLink>
      <NextLink href="/?category=hardware" className={getFilterStyles("hardware")}>
        Hardware & ECE
      </NextLink>
      {/* Visual only elements mimicking the pipeline state as per blueprint */}
      <div className={getFilterStyles("social") + " opacity-50 cursor-not-allowed"} title="Pipeline feature">
        Social Impact
      </div>
      <div className={getFilterStyles("ai") + " opacity-50 cursor-not-allowed"} title="Pipeline feature">
        AI & Data
      </div>
    </div>
  );
}
