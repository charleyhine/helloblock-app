hbApp.controller("blockExplorer/transactionsCtrl", function($scope, $routeParams, $location, $rootScope, HelloBlock) {

  var explorerMode = $rootScope.global.mode;

  var defaultTxHashes = {
    testnet: "6f9e9570881e781db8c137c84c111a138e4a022e6b2def5e2a1589a802fe25f3",
    mainnet: "dc55d9c6ec03ceccf0db43d29e7d626a8b107f41066e3917f30398bb01dda2b5"
  }

  $scope.transaction = {
    txHash: $routeParams.txHash || defaultTxHashes[explorerMode],
    prevTxoutIndex: parseInt($routeParams.prevTxoutIndex),
    nextTxinIndex: parseInt($routeParams.nextTxinIndex),
    coinbase: false
  }

  HelloBlock[explorerMode].Transactions.get({
    txHash: $scope.transaction.txHash
  }, function(res) {

    $scope.transaction = $.extend({}, $scope.transaction, res.data.transaction);

    if ($scope.transaction.inputs[0].prevTxHash.match(/^[0]+$/)) {
      $scope.transaction.coinbase = true;
    }

  }, function(err) {
    console.log("error", err)
    $location.path("/latest").search({
      error: 'true'
    })
  })

})
