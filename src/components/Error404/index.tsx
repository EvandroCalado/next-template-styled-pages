import * as S from './styles';
import { Bug } from '@phosphor-icons/react';

export default function Error404() {
  return (
    <S.Container>
      <S.Title>ERROR 404</S.Title>
      <S.Title2Wrapper>
        <S.Title2>Página não encontrada !</S.Title2>
        {<Bug size={32} />}
      </S.Title2Wrapper>
    </S.Container>
  );
}
