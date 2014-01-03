hbApp.directive( "spin", function() {
	return {
		restrict: "E",
		link: function( $scope, element, attrs ) {
			var opts = {
				lines: 17,
				length: 40,
				width: 4,
				radius: 40,
				corners: 1,
				rotate: 0,
				direction: 1,
				color: '#fff',
				speed: 1,
				trail: 60,
				shadow: false,
				hwaccel: false,
				className: 'spinner',
				zIndex: 2e9,
				top: '100%',
				left: '300%'
			};

			var spinner = new Spinner( opts )
			spinner.spin( element[ 0 ] );
		}
	}
} )
