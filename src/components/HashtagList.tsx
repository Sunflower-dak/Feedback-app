import HashTagItem from "./HashTagItem";

type companyListProp = {
  companyList: string[];
  handleSelectCompany: (company: string) => void;
};

export default function HashtagList({
  companyList,
  handleSelectCompany,
}: companyListProp) {
  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashTagItem company={company} onSelectCompany={handleSelectCompany} />
      ))}

      {/* <li>
        <button>#TestComp</button>
      </li>
      <li>
        <button>#TestComp1</button>
      </li>
      <li>
        <button>#TestComp2</button>
      </li> */}
    </ul>
  );
}
