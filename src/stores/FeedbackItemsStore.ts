import { create } from "zustand";
import { feedBackObj } from "../lib/types";

type Store = {
  feedBackObject: feedBackObj[];
  isLoading: boolean;
  errorMessage: string;
  selectCompany: string;
  getCompanyList: () => string[];
  getFilteredFeedbacks: () => feedBackObj[];
  addItemToList: (text: string) => Promise<void>;
  selectACompany: (company: string) => void;
  getFeedbackObjects: () => Promise<void>;
};

export const useFeedbackObjectStore = create<Store>((set, get) => ({
  feedBackObject: [],
  isLoading: false,
  errorMessage: "",
  selectCompany: "",
  getCompanyList: () => {
    return get()
      .feedBackObject.map((item) => item.company)
      .filter((company, index, array) => {
        return array.indexOf(company) === index;
      });
  },
  getFilteredFeedbacks: () => {
    const state = get();

    return state.selectCompany
      ? state.feedBackObject.filter(
          (feedbackObject) => feedbackObject.company === state.selectCompany
        )
      : state.feedBackObject;
  },
  addItemToList: async (text: string) => {
    const company = text
      .split(" ")
      .find((word) => word.includes("#"))!
      .substring(1);

    const newObj: feedBackObj = {
      id: new Date().getTime(),
      upvoteCount: 0,
      badgeLetter: company.substring(0, 1).toUpperCase(),
      company: company,
      text: text,
      daysAgo: 0,
    };

    // setFeedBackObject([...feedBackObject, newObj]);
    set((state) => ({
      feedBackObject: [...state.feedBackObject, newObj],
    }));

    await fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        body: JSON.stringify(newObj),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
  },
  selectACompany: (company: string) => {
    // setSelectCompany(company);
    set(() => ({
      selectCompany: company,
    }));
  },
  getFeedbackObjects: async () => {
    // setIsLoading(true);
    set(() => ({
      isLoading: true,
    }));

    try {
      const res = await fetch(
        "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
      );
      if (!res.ok) {
        throw new Error();
      }
      const data = await res.json();
      //   setFeedBackObject(data.feedbacks);
      set(() => ({
        feedBackObject: data.feedbacks,
      }));
    } catch {
      //   setErrorMessage("This is an error! Try again🫠");
      set(() => ({
        errorMessage: "This is an error! Try again🫠",
      }));
    }
    set(() => ({
      isLoading: false,
    }));
  },
}));
