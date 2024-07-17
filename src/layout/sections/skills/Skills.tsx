import React from 'react';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {SectionTitle} from '../../../components/SectionTitle';
import {Skill} from './skill/Skill';
import {Container} from '../../../components/Container';
import {S} from './Skills_Styles'
import {Fade} from 'react-awesome-reveal';

const skillData = [
    {
        iconId: 'code',
        title: 'html5',
    },
    {
        iconId: 'css',
        title: 'html5',
    },
    {
        iconId: 'react',
        title: 'react',
    },
    {
        iconId: 'typeScript',
        title: 'typeScript',
    },
    {
        iconId: 'styledComponents',
        title: 'styled components',
    },
    {
        iconId: 'git',
        title: 'GitHub',

    }
]

export const Skills = () => {
    return (
        <S.Skills id={'skills'}>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                    <Fade cascade={true} damping={0.2}>
                        {skillData.map((s, index) => {
                            return <Skill iconId={s.iconId} key={index}
                                          title={s.title}
                                          />
                        })}
                    </Fade>
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};

