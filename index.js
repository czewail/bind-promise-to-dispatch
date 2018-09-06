/**
 * @author Chan Zewail
 * ###### Fri Jan 26 11:26:27 CST 2018
 */

/**
 * 绑定 dispatch 方法到 Promise
 * @param {*} dispatch dispatch
 * @param {*} params dispatch的参数
 */
const bindDispatchToPromise = dispatch => params => {
  return new Promise((resolve, reject) =>
    dispatch({
      ...params,
      resolve,
      reject
    })
  )
}

export default bindDispatchToPromise