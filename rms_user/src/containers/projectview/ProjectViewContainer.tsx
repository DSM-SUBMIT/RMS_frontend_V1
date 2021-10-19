import React, { FC, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import View from '../../components/modal/view';
import {
  GET_PROJECT_CONTENTS,
  GET_MY_PROJECT_CONTENTS,
} from '../../modules/redux/action/viewProject/interface';
import useMain from '../../util/hooks/main';
import useMypage from '../../util/hooks/mypage';
import useViewProject from '../../util/hooks/viewProject';

const ProjectViewContainer: FC = () => {
  const { state } = useViewProject();
  const mainState = useMain().state;
  const myPageState = useMypage().state;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_PROJECT_CONTENTS, GET_MY_PROJECT_CONTENTS });
  }, [GET_PROJECT_CONTENTS, GET_MY_PROJECT_CONTENTS]);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <View {...state} projectId={mainState.currentProjectId || myPageState.currentProjectId} />
    </Suspense>
  );
};

export default ProjectViewContainer;
