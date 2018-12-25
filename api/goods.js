import {
	BASE_URL
} from '@/api/config.js'
export function getGoodsList(data) {
	// console.log('data!!',data)
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/good/listgoods`,
			data: {
				page: data.page || 0,
				type: data.type == "全部" ? '' : data.type || '',
				screen: data.screen || '',
				jg: data.jg || ''
			},
			method: "GET",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				console.log('获取商品列表信息出错', err)
			}
		});

	})
}
export function getGoodDetail(id, table, pid = 'mm_234890166_197900069_54657250100',phone="") {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/good/detailgoods`,
			data: {
				id,
				table,
				pid,
				phone
			},
			method: "GET",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				console.log('获取商品列表信息出错', err)
			}
		});

	})
}

export function getRecommend() {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/good/recommend`,
			method: "GET",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				console.log('获取商品列表信息出错', err)
			}
		});

	})
}

export function getHotListGood() {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/good/hotlist`,
			method: "GET",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				console.log('获取商品列表信息出错', err)
			}
		});

	})
}

export function getOtherGood({
	page = '0',
	type = 'tqg_good',
	screen = '',
	jg = ''
}) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/good/othergood`,
			method: "GET",
			header: {
				'content-header': 'application/json'
			},
			data: {
				page,
				type,
				screen,
				jg
			},
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				console.log('获取商品列表信息出错', err)
			}
		});

	})
}

export function getDetailImg(num_iid) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: 'https://hws.m.taobao.com/cache/desc/5.0',
			method: "GET",
			header: {
				'content-header': 'application/json'
			},
			data: {
				id: num_iid,
				'qq-pf-to': 'pcqq.group'
			},
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				console.log('获取图片列表信息出错', err)
			}
		});

	})
}

export function getKeyWord(keyword, page = 0) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/good/kwsearch`,
			method: "GET",
			header: {
				'content-header': 'application/json'
			},
			data: {
				keyword,
				page,
			},
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				console.log('关键字查询出错', err)
			}
		})
	})
}

export function getCollection(user) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/good/goodcollection/list`,
			method: "GET",
			header: {
				'content-header': 'application/json'
			},
			data: {
				user
			},
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				console.log('get collection message error', err)
			}
		})
	})
}
export function addCollection(data) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/post/good/goodcollection/add`,
			method: "POST",
			header: {
				'content-header': 'application/json'
			},
			data,
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				console.log('add collection message error', err)
			}
		})
	})
}
export function deleteCollection(data) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/post/good/goodcollection/delete`,
			method: 'POST',
			header: {
				'content-type': 'application/json'
			},
			data,
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				console.log('delete collection message error', err)
			}
		})
	})
}
// export function getDetailImg(num_iid) {
// 	return new Promise((resolve, reject) => {
// 		uni.request({
// 			url: 'http://h5api.m.taobao.com/h5/mtop.taobao.detail.getdesc/6.0/',
// 			method: "GET",
// 			header: {
// 				'content-header': 'application/json'
// 			},
// 			data: {
// 				data:{"id":num_iid},
// 				'qq-pf-to':'pcqq.group'
// 			},
// 			success: (res) => {
// 				resolve(res.data);
// 			},
// 			fail: (err) => {
// 				console.log('获取图片列表信息出错', err)
// 			}
// 		});
// 
// 	})
// }
