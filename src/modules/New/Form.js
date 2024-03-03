"use strict";

/* Package System */
import React from "react";
import Link from 'next/link';

/* Package Application */
import FormLayout from '@views/Admin/Components/FormLayout';

/* Package style */

class Form extends React.Component{

	constructor(props){
		super(props);
	}

	render(){

		return(
			<>	
				{/* TYPE : text,status,radio,select,select_multi,image,video,textarea,autoComplete (multiple:true),password,dateTime
					col:'left', col:'right'
					hideColRight={true} -- ẩn cột phải
				*/}
				<FormLayout
					getData={{category_id:`categories?limit=1000`}}// thêm dữ liệu data mới có thể chạy categories id trong news
					fields={[
						{key:'category_name',label:'name',type:'text',col:'left',isRequied:true},
						{key:'status',label:'Trạng thái',type:'status',defaultValue:true,col:'right'},
						{key: 'image', label: 'Hình ảnh', type: 'image',col:'left',isRequied:true},
						{ key:'category_id', label: 'Danh mục', type: 'select', col: 'left', isRequired: true },
						{key:'slug',label:' Đường dẫn ',type:'slug',col:'left',isRequied:true},
						// {key:'title',label:' title ',type:'text',col:'left',isRequied:true},



					]}
				/>
			</>
		)
	}
}

export default Form;