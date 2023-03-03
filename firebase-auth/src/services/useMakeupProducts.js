import { useFetch } from '../hooks/useFetch';

/**
 * 브랜드 별 메이크업 제품 유틸리티 함수
 * @param {string} brandName 브랜드 이름(필수)
 * @returns {{isLoading: boolean; error: null | Error; data: null | any}}
 */

export function useMakeupProducts(brandName) {
  return useFetch(`${import.meta.env.VITE_MAKEUP_API}?brand=${brandName}`);
}
