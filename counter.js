(() => {
  const $counter = document.getElementById("js-counter");
  const $notification = document.getElementById("js-notification");

  const clickHandler = (e) => {
    const $targetButton = e.currentTarget;
    let currentCount = parseInt($counter.textContent);

    if ($targetButton.textContent === "+") {
      currentCount += 1;
    } else {
      currentCount -= 1;
    }

    $counter.textContent = currentCount;

    // 3の倍数のチェックと通知
    if (currentCount !== 0 && currentCount % 3 === 0) {
      $notification.style.display = "block"; // 画像を表示します
    } else {
      $notification.style.display = "none"; // 画像を非表示にします
    }
  };

  const buttons = document.getElementsByClassName("js-button");
  for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", clickHandler);
  }
})();
