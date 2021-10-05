export type MemberType = {
  name: string;
  role: string;
};

export type DetailPlanResponseType = {
  content: string;
  goal: string;
  includeCode: boolean;
  includeOthers: string;
  includeOutcome: boolean;
  includeResultReport: boolean;
  members: Array<MemberType>;
  plannedEndDate: string;
  plannedStartDate: string;
  projectName: string;
  writer: string;
};
