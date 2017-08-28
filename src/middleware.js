let a=0;

const promiseMiddleware = store => next => action => {
	if(isPromise(action.payLoad) && a < 3) {
		action.payLoad.then(
			res => {
				a = a+1;
				console.log("pass")
				action.payLoad = res;
				store.dispatch(action);
			},
			error => {
				a = a+1;
				console.log("err")
				action.error = true;
				action.payLoad = error.response.body;
				store.dispatch(action);
			}
		);
		return;
	}

	next(action);
};

function isPromise(v) {
  return v && typeof v.then === 'function';
}

export {
  promiseMiddleware
};