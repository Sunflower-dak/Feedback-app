export type feedBackObj = {
  id: number;
  upvoteCount: number;
  badgeLetter: string;
  company: string;
  text: string;
  daysAgo: number;
};

export type drillProp = {
  isLoading: boolean;
  errorMessage: string;
  feedBackObject: feedBackObj[];
};

// export type headerProp = {
//   handleAddToArea?: (text: string) => void;
// };

// export type onAddToAreaProp = {
//   onAddToArea: (text: string) => void;
// };
