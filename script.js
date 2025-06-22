// 手機選單切換功能
function toggleMobileMenu() {
  const navigation = document.getElementById("navigation")
  navigation.classList.toggle("active")
}

// 下拉選單切換功能（手機版）
function toggleDropdown(event) {
  if (window.innerWidth <= 768) {
    event.preventDefault()
    const dropdown = event.target.parentElement
    dropdown.classList.toggle("active")
  }
}

// 點擊外部關閉選單
document.addEventListener("click", (event) => {
  const navigation = document.getElementById("navigation")
  const mobileBtn = document.querySelector(".mobile-menu-btn")

  // 如果點擊的不是導航選單或手機選單按鈕，則關閉選單
  if (!navigation.contains(event.target) && !mobileBtn.contains(event.target)) {
    navigation.classList.remove("active")

    // 同時關閉所有下拉選單
    const dropdowns = document.querySelectorAll(".dropdown")
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("active")
    })
  }
})

// 視窗大小改變時重置選單狀態
window.addEventListener("resize", () => {
  const navigation = document.getElementById("navigation")
  const dropdowns = document.querySelectorAll(".dropdown")

  if (window.innerWidth > 768) {
    // 桌面版時關閉手機選單
    navigation.classList.remove("active")

    // 重置所有下拉選單狀態
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("active")
    })
  }
})

// 頁面載入完成後的初始化
document.addEventListener("DOMContentLoaded", () => {
  console.log("樂柞家居網站已載入完成")

  // 可以在這裡添加其他初始化功能
  // 例如：載入動畫、數據獲取等
})

// 平滑滾動功能（如果需要錨點連結）
function smoothScroll(target) {
  const element = document.querySelector(target)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

// 導航連結活躍狀態管理
function setActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html"
  const navLinks = document.querySelectorAll(".nav-link")

  navLinks.forEach((link) => {
    const href = link.getAttribute("href")
    if (href === currentPage) {
      link.classList.add("active")
    } else {
      link.classList.remove("active")
    }
  })
}

// 頁面載入時設置活躍連結
window.addEventListener("load", setActiveNavLink)
