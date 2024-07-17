import React from 'react';
import {Icon} from '../../components/icon/Icon';
import {FlexWrapper} from '../../components/FlexWrapper';
import {S} from './Footer_Styles'

const socialItemsData = [

    {
        iconId: "telegram",
        link: "https://t.me/ErikSopra",
    },
    {
        iconId: "linkedin",
        link: "https://www.linkedin.com/in/erik-akopian-8b43a52b4/",
    },

]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.Name>Эрик</S.Name>
                <S.SocialList>
                    {socialItemsData.map((s, index) => {
                        return (
                            <S.SocialItem key={index}>
                                <S.SocialLink href={s.link} target="_blank">
                                    <Icon height={"21"} width={"21"} viewBox={"0 0 21 21"} iconId={s.iconId} />
                                </S.SocialLink>
                            </S.SocialItem>
                        );
                    })}
                </S.SocialList>
                <S.Copyright>© 2024 Эрик Акопян.</S.Copyright>
            </FlexWrapper>
        </S.Footer>     );
}
