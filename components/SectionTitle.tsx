type SectionTitleProps = {
  children: React.ReactNode;
};

const SectionTitle = ({ children }: SectionTitleProps) => {
  return <h2 className="text-3xl font-medium mb-8 text-center">{children}</h2>;
};

export default SectionTitle;
