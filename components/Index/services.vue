<template lang="pug">
  div
    h1.text-4xl.font-bold.text-gray-800.align-middle.mb-12 所有服務 🤩

    .grid.grid-cols-1.gap-4(
      class="md:grid-cols-2 lg:grid-cols-4"
    )
      nuxt-link.m-4.shadow-lg.rounded-lg(
        v-for="service in services"
        :to='service.url'
      )
        img.object-cover.object-center.w-full.h-56.rounded-lg(
          loading='lazy'
          :src='service.previewImage'
        )
        div.bg-gray-100.-mt-4.pt-6.pb-4.px-4.rounded-lg
          h5.h-16.text-gray-700.text-xl.font-bold.mt-2.overflow-hidden
            | {{service.name}}
          p.h-48.text-gray-500.overflow-hidden
            | {{service.description}}
          span.mt-8.block.py-3.font-medium.text-center.text-white.bg-indigo-500.rounded-lg(
            v-if="service.isAvailable === true"
          ) 立即使用
          span.mt-8.block.py-3.font-medium.text-center.text-white.bg-gray-400.rounded-lg(
            v-else
          ) 尚未開放使用

</template>

<script>
export default {
  data () {
    return {
      services: [{
        name: 'NTUCourse Neo',
        previewImage: 'https://i.imgur.com/iKEf6P9.png',
        description: 'NTUCourse Neo 是一個專屬於台大學生的選課工具，我們提供多樣篩選條件，讓用戶可以更快速的找到想要的課程，也提供了互動式課表，讓同學們安排下學期的課程時不用再狂切視窗了！ 除此之外，還能更方便的排序選課優先順序、一鍵匯入台大課程網，大幅減少同學們花費在找課選課排志願序的時間！',
        isAvailable: true,
        url: '/services/ntu-course'
      }, {
        name: '想鑑你 NTU Rating',
        previewImage: 'https://i.imgur.com/hKL5ar9.jpg',
        description: '想鑑你 NTU Rating 是一個台大的課程評價網站, 且透過 NTU Mail 信箱進行驗證身份（台大學生才可發文），並且結合收藏、查詢時間表、按讚留言、匿名發文、模擬排課等功能。',
        isAvailable: true,
        url: '/services/ntu-rating'
      }, {
        name: 'MineNTU 臺大麥塊',
        previewImage: 'https://minecraft.myntu.me/img/library.88c93db5.jpeg',
        description: '全世界最大、最完整的線上校園。無論是總圖大門前那些社交距離為負值的同學們，還是我們熟悉的博雅教學館，都在 MineNTU 裡一一重現。',
        isAvailable: true,
        url: '/services/minentu'
      }, {
        name: 'MyNTU 網域服務',
        previewImage: 'https://picsum.photos/300/200',
        description: 'MyNTU 網域是一個專屬於台大學生的網域服務，再也不需要屈服於成本，而服務商提供的又臭又長域名。',
        isAvailable: false,
        url: ''
      }]
    }
  }  
}
</script>
