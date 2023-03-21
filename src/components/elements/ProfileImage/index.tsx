import Image from 'next/image';

import * as S from './styles';

export const ProfileImage = () => {
  return (
    <S.Container>
      <S.WrapperImageProfile>
        <Image
          src='https://github.com/lucasfelixc.png'
          alt='Lucas Felix'
          width={300}
          height={300}
        />
      </S.WrapperImageProfile>
    </S.Container>
  );
};
