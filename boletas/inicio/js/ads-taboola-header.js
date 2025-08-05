/* <![CDATA[ */
document.addEventListener("DOMContentLoaded", function(event) {
  (function (document, window) {
    url = drupalSettings.ads_taboola.client_id;
    window._taboola = window._taboola || [];
    _taboola.push({homepage:'auto'});
    !function (e, f, u, i) {
    if (!document.getElementById(i)){
      e.async = 1;
      e.src = u;
      e.id = i;
      f.parentNode.insertBefore(e, f);
    }
    }(document.createElement('script'),
    document.getElementsByTagName('script')[0],
    url,
    'tb_loader_script');
    if(window.performance && typeof window.performance.mark == 'function') {
      window.performance.mark('tbl_ic');
    }
  })(document, window);
});
/* ]]> */