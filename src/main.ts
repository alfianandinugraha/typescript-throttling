const countThrottlingEl = document.getElementById("throttling-count");
const countNonThrottlingEl = document.getElementById("non-throttling-count");

const throttling = (cb: () => void, duration: number = 200) => {
  let point = 0;
  return () => {
    let now = new Date().getTime();
    if (now - point >= duration) {
      cb();
      point = now;
    }
  };
};

if (countThrottlingEl && countNonThrottlingEl) {
  let countNonThrottling = 0;
  let countThrottling = 0;

  window.addEventListener(
    "scroll",
    throttling(() => {
      countThrottling++;
      countThrottlingEl.innerHTML = countThrottling + "";
    }, 200)
  );

  window.addEventListener("scroll", () => {
    countNonThrottling++;
    countNonThrottlingEl.innerHTML = countNonThrottling + "";
  });
}
