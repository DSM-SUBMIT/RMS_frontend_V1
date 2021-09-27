import React from 'react';
import * as S from './style';
import Header from '../header';
import { Checkbox } from '../../constance/writePlan';

const WritePlan = () => {
    return (
        <>
            <Header/>
            <S.Main>
                <S.Form name="plan" method="post">
                    <S.Plan>
                        <span>[계획서]</span>
                        <S.TitleName>보고서 관리 시스템</S.TitleName>
                        <S.PlanContent>
                            <span>시작예정과 완료예정</span>
                            <div>
                                <input id="month" type="month"/>
                                <input id="month" type="month"/>
                            </div>
                        </S.PlanContent>
                        <S.PlanContent>
                            <h4>프로젝트 목표</h4>
                            <textarea placeholder="프로젝트의 목표를 작성해주세요"></textarea>
                        </S.PlanContent>
                        <S.PlanContent>
                            <h4>프로젝트 내용</h4>
                            <textarea placeholder="프로젝트의 내용을 구체적으로 작성해주세요"></textarea>
                        </S.PlanContent>
                        <S.PlanContentResult>
                            <h4>결과물 (해당사항체크)</h4>
                            {Checkbox.map((div, i) => {
                                    return (
                                        <div key={i}>
                                            <input type="checkbox" id={Checkbox[i].id}/>
                                            <label htmlFor={Checkbox[i].id}>{Checkbox[i].span}</label>
                                        </div>
                                )})}
                        </S.PlanContentResult>
                    </S.Plan>
                    <S.ButtonGroup>
                        <button type="button">임시저장</button>
                        <button type="button">제출</button>
                    </S.ButtonGroup>
                </S.Form>
            </S.Main>
        </>
    );
};

export default WritePlan;