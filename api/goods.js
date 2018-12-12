import {
	BASE_URL
} from '@/api/config.js'
export function getGoodsList(data) {
	// console.log('data!!',data)
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/listgoods`,
			data: {
				page: data.page || 0,
				type: data.type || '',
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
export function getGoodDetail(id) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/detailgoods`,
			data: {
				id,
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
			url: `${BASE_URL}/api/get/recommend`,
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
			url: `${BASE_URL}/api/get/hotlist`,
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
