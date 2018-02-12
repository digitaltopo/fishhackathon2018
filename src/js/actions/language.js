/*
export function setLanguage() {
  return dispatch => (
    setGLang()
      .on('success',
        payload => dispatch({ type: 'SET_LANGUAGE', payload })
      )
      .on('error',
        payload => dispatch({ type: 'SET_LANGUAGE_ERROR', error: true, payload })
      )
      .start()
  );
}
 */
export function setLanguage(lang) {
  return { type: "SET_LANGUAGE", payload: lang };
}
