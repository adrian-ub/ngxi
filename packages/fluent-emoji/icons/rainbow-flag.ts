import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiRainbowFlagIcon],svg[fluent-emoji-rainbow-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="27.875" height="19.914" x="2.252" y="6.043" fill="#F13770" rx=".6"></svg:rect><svg:rect width="27.875" height="19.914" x="2.252" y="6.043" fill="#F13770" rx=".6"></svg:rect><svg:path fill="#FF5C41" d="M2.252 12.688V9.344h27.875v3.344z"></svg:path><svg:path fill="#FCA34D" d="M2.252 16v-3.344h27.875V16z"></svg:path><svg:path fill="#43D195" d="M2.252 19.313v-3.344h27.875v3.344z"></svg:path><svg:path fill="#3F8DF1" d="M2.252 22.656v-3.343h27.875v3.343z"></svg:path><svg:path fill="#6D549F" d="M2.252 22.656v2.701a.6.6 0 0 0 .6.6h26.675a.6.6 0 0 0 .6-.6v-2.7z"></svg:path><svg:rect width="27.875" height="19.914" x="2.252" y="6.043" fill="url(#f2147id0)" fill-opacity=".25" rx=".6"></svg:rect><svg:rect width="27.875" height="19.914" x="2.252" y="6.043" fill="url(#f2147id1)" fill-opacity=".5" rx=".6"></svg:rect><svg:rect width="27.875" height="19.914" x="2.252" y="6.043" fill="url(#f2147id2)" fill-opacity=".5" rx=".6"></svg:rect><svg:rect width="27.875" height="19.914" x="2.252" y="6.043" fill="url(#f2147id3)" rx=".6"></svg:rect><svg:defs><svg:lineargradient id="f2147id0" x1="2.252" x2="3.221" y1="17.813" y2="17.813" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#3A3A3A"></svg:stop><svg:stop offset="1" stop-color="#3A3A3A" stop-opacity="0"></svg:stop></svg:lineargradient><svg:lineargradient id="f2147id1" x1="30.127" x2="29.159" y1="19.332" y2="19.332" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FBF2FF"></svg:stop><svg:stop offset="1" stop-color="#FBF2FF" stop-opacity="0"></svg:stop></svg:lineargradient><svg:lineargradient id="f2147id2" x1="25.065" x2="25.065" y1="6.043" y2="6.754" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FBF2FF"></svg:stop><svg:stop offset="1" stop-color="#FBF2FF" stop-opacity="0"></svg:stop></svg:lineargradient><svg:lineargradient id="f2147id3" x1="8.752" x2="8.752" y1="26.004" y2="24.938" gradientUnits="userSpaceOnUse"><svg:stop offset=".015" stop-color="#693CA6"></svg:stop><svg:stop offset="1" stop-color="#693CA6" stop-opacity="0"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentEmojiRainbowFlagIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
