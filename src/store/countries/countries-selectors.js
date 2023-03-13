export const selectCountriesInfo = (state) => ({
  status: state.countries.status,
  error: state.countries.error,
  qty: state.countries.length,
});

export const selectAllCounries = (state) => state.countries.list;
