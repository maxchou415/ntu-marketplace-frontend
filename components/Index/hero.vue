<template lang="pug">
.bg-white.pt-6.pb-24(class='lg:pt-12')
  section.flex.flex-col.justify-between.gap-6(class='lg:flex-row sm:gap-10 md:gap-16')
    .h-72.bg-gray-100.overflow-hidden.shadow-lg.rounded-lg(
      class='xl:w-5/12 lg:order-1'
    )
      img.w-full.h-full.object-cover.object-center(
        src='~/static/images/hero.jpg'
        loading='lazy'
        alt='Photo by freepik'
      )
    .flex.flex-col.justify-center.order-0(class='xl:w-5/12 lg:text-left')
      p.text-indigo-500.font-semibold.mb-4(
        class='md:text-lg xl:text-xl md:mb-6'
      ) NTU Marketplace
      h1.font-sans-zh.text-gray-800.text-4xl.font-medium.mb-4(
        class='sm:text-5xl md:text-5xl md:mb-6'
      ) 臺大瑞士刀

      p.text-gray-500.leading-relaxed.mb-4.text-lg(class='lg:w-4/5 xl:text-xl')
        | 總覺得校園生活哪裡怪怪的，渾身發癢嗎？選課選到懷疑人生，看課程介紹卻不知道隱藏其中的魔鬼嗎？🥴
      p.text-gray-500.leading-relaxed.mb-10.text-lg(class='lg:w-4/5 xl:text-xl')
        span.text-indigo-500.font-bold 我們也覺得！
        span.block.mt-2 快使用「臺大瑞士刀」中的服務來解決你的問題吧！

      .flex.flex-col(class='sm:flex-row lg:justify-start gap-2.5')
        nuxt-link.inline-block.bg-indigo-500.ring-indigo-300.text-white.text-sm.font-semibold.text-center.rounded-lg.outline-none.transition.duration-100.px-8.py-3(
          to='/login'
          class='hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring md:text-base'
        ) 新增你的服務
        a.inline-block.bg-gray-200.ring-indigo-300.text-gray-500.text-sm.font-semibold.text-center.rounded-lg.outline-none.transition.duration-100.px-8.py-3(
          href='https://github.com/maxchou415/ntu-marketplace-frontend'
          target="_blank"
          class='hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base'
        ) GitHub ⭐️

</template>

<script>
</script>
