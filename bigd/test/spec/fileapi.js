/* global describe, it */

var http = require( "http" ),
assert = require( "chai" ).assert;

(function () {
	'use strict'; 

	describe('Give it some context', function () {
		describe('maybe a bit more context here', function () {
			it('should run here fewsss assertions', function (done) {
				var options = {
					host: 'localhost',
					port: 3000,
					path: '/ls/Machine/Users/alainlavoie',  
					method: 'GET'
				};
				var req = http.request( options, function( res ) {
					assert.equal( res.statusCode, "200", "statusCode error" );
					res.setEncoding( 'utf8' ); 
					res.on( 'data', function( json_data ) {
					   var json = JSON.parse( json_data );
					   assert.equal(  "a", "a", "" );
					   console.log(json_data);
					   done();
					});
				} );
				req.end();
 

			});
		});
	});
})();







