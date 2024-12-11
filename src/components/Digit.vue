<template>
  <svg
    class="digit"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="595.28px"
    height="841.89px"
    viewBox="0 0 595.28 841.89"
    enable-background="new 0 0 595.28 841.89"
    xml:space="preserve"
  >
    <path
      :class="{ active: '02356789'.includes(data) }"
      class="figit-a"
      fill="#00A0E9"
      d="M565.022,15.1c0,8.339-9.76,15.1-21.794,15.1H52.051c-12.037,0-21.793-6.761-21.793-15.1l0,0
	c0-8.339,9.756-15.1,21.793-15.1h491.178C555.263,0,565.022,6.761,565.022,15.1L565.022,15.1z"
    />
    <path
      :class="{ active: '0235689'.includes(data) }"
      class="digit-b"
      fill="#00A0E9"
      d="M565.022,826.445c0,8.338-9.76,15.099-21.794,15.099H52.051c-12.037,0-21.793-6.761-21.793-15.099l0,0
	c0-8.341,9.756-15.099,21.793-15.099h491.178C555.263,811.347,565.022,818.104,565.022,826.445L565.022,826.445z"
    />
    <path
      :class="{ active: '2345689'.includes(data) }"
      class="digit-c"
      fill="#00A0E9"
      d="M565.022,420.772c0,8.34-9.76,15.1-21.794,15.1H52.051c-12.037,0-21.793-6.76-21.793-15.1l0,0
	c0-8.339,9.756-15.101,21.793-15.101h491.178C555.263,405.672,565.022,412.434,565.022,420.772L565.022,420.772z"
    />
    <path
      :class="{ active: '045689'.includes(data) }"
      class="digit-d"
      fill="#00A0E9"
      d="M15.1,400.956c-8.339,0-15.1-6.76-15.1-15.099V45.52c0-8.339,6.761-15.1,15.1-15.1l0,0
	c8.339,0,15.1,6.761,15.1,15.1v340.337C30.2,394.196,23.439,400.956,15.1,400.956L15.1,400.956z"
    />
    <path
      :class="{ active: '01234789'.includes(data) }"
      class="digit-e"
      fill="#00A0E9"
      d="M580.182,400.956c-8.34,0-15.101-6.76-15.101-15.099V45.52c0-8.339,6.761-15.1,15.101-15.1l0,0
	c8.338,0,15.099,6.761,15.099,15.1v340.337C595.28,394.196,588.52,400.956,580.182,400.956L580.182,400.956z"
    />
    <path
      :class="{ active: '013456789'.includes(data) }"
      class="digit-f"
      fill="#00A0E9"
      d="M580.182,809.046c-8.34,0-15.101-6.758-15.101-15.099V453.61c0-8.339,6.761-15.099,15.101-15.099l0,0
	c8.338,0,15.099,6.76,15.099,15.099v340.337C595.28,802.288,588.52,809.046,580.182,809.046L580.182,809.046z"
    />
    <path
      :class="{ active: '0268'.includes(data) }"
      class="digit-g"
      fill="#00A0E9"
      d="M15.1,809.046c-8.339,0-15.1-6.758-15.1-15.099V453.61c0-8.339,6.761-15.099,15.1-15.099l0,0
	c8.339,0,15.1,6.76,15.1,15.099v340.337C30.2,802.288,23.439,809.046,15.1,809.046L15.1,809.046z"
    />
    <circle :class="{ active: data === ':' }" fill="#00A0E9" cx="297.64" cy="623.779" r="33.105" />
    <circle :class="{ active: data === ':' }" fill="#00A0E9" cx="297.64" cy="215.689" r="33.105" />
  </svg>
</template>

<script setup>
defineProps({
  data: {
    type: String,
    default() {
      return ''
    },
  },
  // color: {
  //   type: String,
  //   default() {
  //     return ''
  //   },
  // },
})
</script>

<style scoped lang="sass">
.digit
  width: 100px
  height: 143px
  margin: 7px
path,circle
  fill: transparent
  &.active
    // v-bind 把 CSS 的值和 Vue 的變數綁定
    // fill: v-bind(color)
    fill: red
// .figit-a
//   fill: yellow
</style>
