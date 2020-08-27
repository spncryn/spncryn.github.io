const $q=e=>document.getElementById(e),url=encodeURIComponent(window.location.href),newRequest=function(e=!0){fetch("https://api.websitecarbon.com/b?url="+url).then(function(e){if(!e.ok)throw Error(e);return e.json()}).then(function(n){e&&renderResult(n),n.t=(new Date).getTime(),localStorage.setItem("wcb_"+url,JSON.stringify(n))}).catch(function(e){$q("wcb_g").innerHTML="Data unavailable",console.log(e),localStorage.removeItem("wcb_"+url)})},renderResult=function(e){$q("wcb_g").innerHTML=e.c+"g of CO<sub>2</sub>/view",$q("wcb_2").insertAdjacentHTML("beforeEnd","Cleaner than "+e.p+"% of pages tested")},css="<style>.carbonbadge{--b1:#000;font-size:20px;line-height:24px;text-align:center;color:var(--b1)}.carbonbadge sub{vertical-align:middle;position:relative;top:.3em;font-size:20px}.carbonbadge a,.carbonbadge p{text-align:center;display:inline-flex;justify-content:center;align-items:center;font-size:20px;line-height:24px;margin:0;font-family:Inconsolata, monospace}#wcb_g,.carbonbadge a{padding:0em .5em;background:#fff;border:.05em solid var(--b1);}#wcb_g{border-right:0;min-width:8.2em}.carbonbadge a{border-left:0;background:var(--b1);color:#fff;text-decoration:none;border-color:var(--b1)}.wcb-d #wcb_2{color:#fff}.carbonbadge.wcb-d a{color:var(--b1);background:var(--b1);border-color:var(--b1)}</style>",badge=$q("wcb");if("fetch"in window){badge.insertAdjacentHTML("beforeEnd",css),badge.insertAdjacentHTML("beforeEnd",'<div id="wcb_p"><p id="wcb_g">Measuring CO<sub>2</sub>&hellip;</p><a target="_blank" rel="noopener" href="https://websitecarbon.com">Carbon Footprint</a></div><p id="wcb_2"></p>');let e=localStorage.getItem("wcb_"+url);const n=(new Date).getTime();if(e){const t=JSON.parse(e);renderResult(t),n-t.t>864e5&&newRequest(!1)}else newRequest()}const $q = e => document.getElementById(e),
    url = encodeURIComponent(window.location.href),
    newRequest = function(e = !0) {
        fetch("https://api.websitecarbon.com/b?url=" + url).then(function(e) {
            if (!e.ok) throw Error(e);
            return e.json()
        }).then(function(n) {
            e && renderResult(n), n.t = (new Date).getTime(), localStorage.setItem("wcb_" + url, JSON.stringify(n))
        }).catch(function(e) {
            $q("wcb_g").innerHTML = "Data unavailable", console.log(e), localStorage.removeItem("wcb_" + url)
        })
    },
    renderResult = function(e) {
        $q("wcb_g").innerHTML = e.c + "g of CO<sub>2</sub>/view", $q("wcb_2").insertAdjacentHTML("beforeEnd", "Cleaner than " + e.p + "% of pages tested")
    },
    css = ".carbonbadge sub{vertical-align:middle;position:relative;top:.3em;font-size:20px}.carbonbadge a,.carbonbadge p{text-align:center;display:inline-flex;justify-content:center;align-items:center;font-size:20px;line-height:24px;margin:0;font-family:Inconsolata,monospace}#wcb_g,.carbonbadge a{padding:.2em .5em;background:#fff}#wcb_g{border-right:0;min-width:8.2em}.carbonbadge a{border-left:0;background:var(--b1);color:#fff;text-decoration:none;border-color:var(--b1)}.wcb-d #wcb_2{color:#fff}.carbonbadge.wcb-d a{color:var(--b1);background:var(--b1);border-color:var(--b1)}",
    badge = $q("wcb");
if ("fetch" in window) {
    badge.insertAdjacentHTML("beforeEnd", css), badge.insertAdjacentHTML("beforeEnd", '<div id="wcb_p"><p id="wcb_g">Measuring CO<sub>2</sub>&hellip;</p><a target="_blank" rel="noopener" href="https://websitecarbon.com">Website Carbon</a></div><p id="wcb_2"></p>');
    let e = localStorage.getItem("wcb_" + url);
    const n = (new Date).getTime();
    if (e) {
        const t = JSON.parse(e);
        renderResult(t), n - t.t > 864e5 && newRequest(!1)
    } else newRequest()
}