module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function(options) {
    return this.addBowerPackageToProject('jquery-cycle2', '2.1.6');
  }
}
