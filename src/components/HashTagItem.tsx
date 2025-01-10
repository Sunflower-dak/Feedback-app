type HashTagItemProp = {
  company: string;
  onSelectCompany: (company: string) => void;
};
export default function HashTagItem({
  company,
  onSelectCompany,
}: HashTagItemProp) {
  return (
    <li key={company}>
      <button onClick={() => onSelectCompany(company)}>#{company}</button>
    </li>
  );
}
