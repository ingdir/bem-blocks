(function($, undefined) {
    
    $.extend($.fn, {
        getMod: function(block, elem, modName) {
            if (modName === undefined) {
                modName = elem;
                elem = undefined;
            } 
            if (this.length) {
                var classPattern = block + (elem !== undefined ? '__' + elem : '') + '_' + modName,
                    modVal = false;
                
                $.each(this.get(0).classList, function(i, c) {
                    if (c === classPattern) {
                        modVal = true;
                        return false;
                    } else if (c.indexOf(classPattern) === 0 && c.substr(classPattern.length, 1) === '_') {
                        modVal = c.substr(classPattern.length + 1);
                        return false;
                    }
                });
                
                return modVal;
                
            } else return undefined;
        },
        
        setMod: function(block, elem, modName, modVal) {
            if (modVal === undefined) {
                modVal = modName;
                modName = elem;
                elem = undefined;
            }
            
            return this.each(function() {
                var $this = $(this),
                    classPattern = block + (elem !== undefined ? '__' + elem : '') + '_' + modName;
                
                if (modVal === false) {
                    $this.removeClass(classPattern);
                } else if (modVal === true) {
                    $this.addClass(classPattern);
                } else {
                    var condemned = [];
                    $.each(this.classList, function(i, c) {
                        if (c.indexOf(classPattern) === 0 && c.substr(classPattern.length, 1) === '_') {
                            condemned.push(c);
                        }
                    });
                    $.each(condemned, function(i, c) {
                        $this.removeClass(c);
                    });
                    
                    $this.addClass(classPattern + '_' + modVal);
                }
            });
        }
    });
    
})(jQuery);