import { POKEMON_NAME } from '@/lib/pokemonName';
import { PokemonInfoProps } from '@/lib/type';
import styles from './Detail.module.scss';
import { FORM_NAMES } from '@/lib/pokemonFormNames';
import { POKEMON_TYPES } from '@/lib/constants';

const PokemonImg = ({ pokemon, formName }: PokemonInfoProps) => {
  const pokemonOfficialImage =
    pokemon?.sprites.other?.['official-artwork'].front_default;

  const getKoreanName = (englishName: string | undefined) => {
    return Object.keys(POKEMON_NAME).find(
      (key) => POKEMON_NAME[key] === englishName,
    );
  };

  const getLocalImagePath = (name: string | undefined) => {
    return `/src/assets/pokemonImg/${name}.png`;
  };

  const getKoreanFormName = (englishName: string | undefined) => {
    return FORM_NAMES[englishName as string];
  };

  const koreanName =
    formName
      ?.replace('-거다이맥스', '')
      .replace('-무한다이맥스', '')
      .replace('-팔데아', '')
      .replace('-가라르', '')
      .replace('-히스이', '')
      .replace('-알로라', '') ||
    getKoreanName(pokemon?.name) ||
    getKoreanFormName(pokemon?.name);

  /*   let someFormName = null;
  if (formName?.includes('-거다이맥스')) {
    someFormName = '거다이맥스';
  } else if (formName?.includes('-무한다이맥스')) {
    someFormName = '무한다이맥스';
  } else if (formName?.includes('-팔데아')) {
    someFormName = '팔데아';
  } else if (formName?.includes('-가라르')) {
    someFormName = '가라르';
  } else if (formName?.includes('-히스이')) {
    someFormName = '히스이';
  } else if (formName?.includes('-알로라')) {
    someFormName = '알로라';
  } */

  const formNameMatch = formName?.match(
    /-(거다이맥스|무한다이맥스|팔데아|가라르|히스이|알로라)/,
  );
  const someFormName = formNameMatch ? formNameMatch[1] : '';

  return (
    <>
      <div className={styles.detail__center}>
        <div className={styles.detail__nameBox}>
          <img src="/src/assets/pokemon_name_box.svg" alt="name_box" />
          <span className={styles.detail__name}>{koreanName}</span>
        </div>
        <div className={styles.detail__some__form}>{someFormName}</div>
        <div className={styles.detail__img__box}>
          <img
            className={styles.official__img}
            loading="lazy"
            src={
              pokemonOfficialImage || getLocalImagePath(formName || koreanName)
            }
            alt="Official Artwork"
            width={300}
            height={300}
          />
        </div>
        <div className={styles.detail__type}>
          {pokemon?.types.map((typeInfo, index) => {
            const koreanPokemonName = POKEMON_TYPES[typeInfo.type.name];

            return (
              <div
                key={index}
                className={`${styles.detail__plate} ${styles[koreanPokemonName]}`}
              >
                <img
                  src={`/src/assets/icons/${koreanPokemonName}_on.svg`}
                  alt={`${koreanPokemonName}타입 아이콘`}
                />
                <div>{koreanPokemonName}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PokemonImg;
