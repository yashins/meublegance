app.directive('menu',function(){
	return{
		restrict:'E',
		scope:{
			name:'@name'			
		},
		templateUrl:'views/menutop.tpl.html'
	}
})