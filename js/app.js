(function (angular) {
	'use strict';

//MyTodoMvc  Module
//应用程序主模块

var myApp = angular.module("MyTodoMve",[])





//注册一个控制器
myApp.controller('MainController',["$scope",function($scope){
	
//文本框需要一个模型
$scope.text='';
	
	
//任务列表需要一个
//给每个任务加个id无论是否有用
//{id:1,text:'学习'，conpleted:true}

$scope.todos=[
{id:1,text:'学习',completed:false},
{id:2,text:'睡觉',completed:false},
{id:3,text:'打豆豆',completed:true}
]; 
	//添加todo
	$scope.add=function(){
		$scope.todos.push({
//			id:$scope.todos.length+1,//自动增长
//          id:Math.random();//用随机数防止重复
            id:getId(),
//			由于$scope.text是双向数据绑定,add可以通过他获得数值
			text:$scope.text,
			completed:false
		})
		//清空文库框，模型数据
		$scope.text='';
	};
	//删除   删除之前为dom操作，转换思维，改为对id操作。
	$scope.remove=function(id){
		for (var i=0;i<$scope.todos.length;i++ ) {
			if ($scope.todos[i].id==id) {
				$scope.todos.splice(i,1);
				break;
			}
		}
	};
	//清空已完成
	$scope.clear=function(){
		var result =[];
		for (var i=0;i<$scope.todos.length;i++ ) {
			if (!$scope.todos[i].completed) {
				result.push($scope.todos[i]);
			} 
		}
		$scope.todos=result;
	}
	
	//是否已经有完成的  ng-show="exist"  对应自执行
	$scope.exist=function(){
		for (var i=0;i<$scope.todos.length;i++ ) {
			if ($scope.todos[i].completed) {
                 return true;
			} 
		}
		return false;
	}
	
	function getId(){
	var id = Math.random();
	for (var i=0;i<$scope.todos.length;i++) {
			if ($scope.todos[i].id==id) {
				 id=getId();
				 break;
			}
	}
	return id;
}
	//当前编辑哪个元素
	$scope.currentEditingId= -1;
	$scope.editing = function(id){
		
	}
	
	
}])

})(angular)
