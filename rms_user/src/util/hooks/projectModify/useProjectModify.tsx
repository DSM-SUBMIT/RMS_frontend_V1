import { useDispatch } from 'react-redux';
import { MemberListType } from '../../../constance/project';
import {
  setFieldList,
  setMemberList,
  setProjectName,
  setProjectType,
  setTeacher,
  setTeamName,
  setTechStacks,
  setRole,
} from '../../../modules/redux/action/porject';
import { useSelectState } from '../default';

const useProjectModify = () => {
  const dispatch = useDispatch();
  const state = useSelectState().projectModify;
  const setState = {
    setProjectName: (payload: string) => {
      dispatch(setProjectName(payload));
    },
    setProjectType: (payload: string) => {
      dispatch(setProjectType(payload));
    },
    setTeacher: (payload: string) => {
      dispatch(setTeacher(payload));
    },
    setTeamName: (payload: string) => {
      dispatch(setTeamName(payload));
    },
    setTechStacks: (payload: string) => {
      dispatch(setTechStacks(payload));
    },
    setFieldList: (payload: string[]) => {
      dispatch(setFieldList(payload));
    },
    setMemberList: (payload: MemberListType) => {
      dispatch(setMemberList(payload));
    },
    setRole: (payload: { id: string; role: string }) => {
      dispatch(setRole(payload));
    },
  };
  return { state, setState };
};

export default useProjectModify;
