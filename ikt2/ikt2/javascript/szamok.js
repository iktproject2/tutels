$(document).ready(function () {
                let fnum = 0, snum = 0,  dnum = 0, gnum = 0, hnum = 0, jnum = 0, knum = 0, lnum = 0, mnum = 0;
                $('input[name="fnum"]').on("click", function () {
                    fnum = parseInt($('input[name="fnum"]:checked').val());
      
                });
      
                $('input[name="snum"]').on("click", function () {
                    snum = parseInt($('input[name="snum"]:checked').val());
                });
                
                $('input[name="dnum"]').on("click", function () {
                        dnum = parseInt($('input[name="dnum"]:checked').val());
                    });
                $('input[name="gnum"]').on("click", function () {
                            gnum = parseInt($('input[name="gnum"]:checked').val());
                        });
                $('input[name="hnum"]').on("click", function () {
                                hnum = parseInt($('input[name="hnum"]:checked').val());
                            });
                $('input[name="jnum"]').on("click", function () {
                                    jnum = parseInt($('input[name="jnum"]:checked').val());
                                });
                $('input[name="knum"]').on("click", function () {
                                        knum = parseInt($('input[name="knum"]:checked').val());
                                    });
                $('input[name="lnum"]').on("click", function () {
                                            lnum = parseInt($('input[name="lnum"]:checked').val());
                                        });
                            $('input[name="mnum"]').on("click", function () {
                                                mnum = parseInt($('input[name="mnum"]:checked').val());
                                            });
      
                $("button").on('click', function () {
                    let sum= fnum + snum + dnum + gnum + hnum + jnum + knum + lnum + mnum;
                    $(".res").html(sum + "Ft/fő");
                    var num1 = parseInt(document.getElementById('num1').value);
                    let dum= (fnum + snum + dnum + gnum + hnum + jnum + knum + mnum + lnum) * num1;
                    $(".ret").html("Végösszeg:" + dum);
                    
                    
                });
            });
    function reset(){
        var ele = document.querySelectorAll("input[type=radio]");
         for(var i=0;i<ele.length;i++){
            ele[i].checked = false;
            window.location.reload();
         }
      }