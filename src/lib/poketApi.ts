import { fetchData } from './api';

export const getAllPokemonDatas = async (limit: number) => {
  return fetchData(`pokemon?limit=${limit}`, 'get');
};

export const getPokemonData = async (pokemon: number | string) => {
  return fetchData(`pokemon/${pokemon}/`, 'get');
};

export const getAllPokemonSpeciesDatas = async (limit: number) => {
  return fetchData(`pokemon-species?limit=${limit}`, 'get');
};

export const getPokemonSpeciesDatas = async (pokemon: number | string) => {
  return fetchData(`pokemon-species/${pokemon}/`, 'get');
};

export const getPokemonTypesDatas = async (type: number | string) => {
  return fetchData(`type/${type}/`, 'get');
};

export const getPokemonAbility = async (url: string) => {
  return fetchData(`${url}`, 'get');
};

export const getPokemonType = async (url: string) => {
  return fetchData(`${url}`, 'get');
};

export const getPokemonSpecies = async (url: string) => {
  return fetchData(`${url}`, 'get');
};
