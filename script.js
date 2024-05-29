document.addEventListener("visibilitychange", handleVisibilityChange);
window.addEventListener("beforeunload", handleBeforeUnload);
window.addEventListener("popstate", handlePopstate);

function redirectToBackRedirect() {
    window.location.href = "backredrect.html";
}
// http://127.0.0.1:5500/Backredrect.html

function handleVisibilityChange() {
    if (document.visibilityState === "hidden") {
        redirectToBackRedirect();
    }
}

function handleBeforeUnload(event) {
    // console.log("event", event);
    event.preventDefault();
    redirectToBackRedirect();
}

function handlePopstate() {
    redirectToBackRedirect();
}