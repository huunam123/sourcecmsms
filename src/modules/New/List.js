"use strict";

/* Package System */
import React from "react";

/* Package Application */
import ListLayout from '@views/Admin/Components/ListLayout';

class List extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this._isMounted = true;
	}

	componentWillUnmount(){
		this._isMounted = false;
	}

	render(){

		return(
			<React.Fragment>
				{/*  
					maxWidthPopup: xl,lg,md,sm,xs
					isBtnAdd={true} -- Nút thêm
					search={true} -- tìm kiếm
					export={true} -- xuất dữ liệu
					isBtnFilter={true} -- bộ lọc
					hideAction={true} -- List ẩn hành động
					data -- các trường trong update/add
				*/}
				<ListLayout 
					nameDisplay={'Quản lý tin tuc'}
					isBtnAdd={true}
					maxWidthPopup='md'
					columns={[
						{key:'id',label:'id',type:'text'},
						//{key:'name',label:'Tiêu đề',type:'text',width:170},
						{key:'image',label:'image'},
						{key:'status',label:'Trạng thái',type:'status',width:120},
						{key:'slug',label:'Đường dẫn ',type:'slug',width:120},
						{key:'created_at',label:'Ngày tạo',type:'dateTime',width:120},
						{key:'updated_at',label:'Cập nhật',type:'dateTime',width:120},
				
					]}
				/>
			</React.Fragment>
		)
	}
}

export default List;