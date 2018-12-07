export function getGoodsList() {
	return new Promise((resolve, reject) => {
		uni.request({
			url: 'https://www.example.com/request', 
			data: {
				text: 'uni.request'
			},
			header: {
				'content-header': 'application/json' 
			},
			success: (res) => {
				resolve(res);
			},
			fail:(err) =>{
				console.log('获取商品列表信息出错',err)
			}
		});

	})

}
