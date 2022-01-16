<template lang="pug">
  .my-6.relative.flex.items-center.justify-between
    .flex.items-center
      a.inline-flex.items-center(
        href='/'
        aria-label='NTU Marketplace'
        title='NTU Marketplace'
      )
        a(
          href="/"
        ).inline-flex.items-center
          .text-4xl 🧰
          div
            p.ml-3.text-2xl.text-gray-600.tracking-wide.font-medium Marketplace
            p.text-right.text-xs.text-gray-400.tracking-wide Powered by
              span.tracking-wide.ml-1.text-indigo-500 MyNTU

    ul.flex.items-center.space-x-8(class='lg:flex')
      li
        button.py-2.px-4.bg-indigo-500.text-white.w-full.transition.ease-in.duration-200.text-center.text-base.font-semibold.shadow-md.rounded-lg(type='button' class='hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2')
          | Sign Up
</template>
