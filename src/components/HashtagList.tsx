import { useMemo } from "react";
import { useFeedbackObjectStore } from "../stores/FeedbackItemsStore";
import HashTagItem from "./HashTagItem";

export default function HashtagList() {
  const getCompanyList = useFeedbackObjectStore(
    (state) => state.getCompanyList
  );
  const selectACompany = useFeedbackObjectStore(
    (state) => state.selectACompany
  );

  const companyList = useMemo(() => getCompanyList(), [getCompanyList]);

  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashTagItem
          key={company}
          company={company}
          onSelectCompany={selectACompany}
        />
      ))}
    </ul>
  );
}
