export const useCompute = (count) => {
  const plus = () => count.value ++
  const minus = () => count.value --
  return {
    plus,
    minus,
  }
}