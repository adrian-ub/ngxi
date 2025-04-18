import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiTransgenderFlagIcon],svg[fluent-emoji-transgender-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="27.875" height="19.914" x="2.252" y="6.043" fill="url(#f2506id0)" rx=".6"></svg:rect><svg:path fill="#FB8190" d="M2.252 22.125V9.875h27.875v12.25z"></svg:path><svg:path fill="#FCECFF" d="M2.252 18.063v-4.125h27.875v4.124z"></svg:path><svg:rect width="27.875" height="19.914" x="2.252" y="6.043" fill="url(#f2506id1)" fill-opacity=".25" rx=".6"></svg:rect><svg:rect width="27.875" height="19.914" x="2.252" y="6.043" fill="url(#f2506id2)" fill-opacity=".5" rx=".6"></svg:rect><svg:rect width="27.875" height="19.914" x="2.252" y="6.043" fill="url(#f2506id3)" fill-opacity=".5" rx=".6"></svg:rect><svg:rect width="27.875" height="19.914" x="2.252" y="6.043" fill="url(#f2506id4)" rx=".6"></svg:rect><svg:defs><svg:lineargradient id="f2506id0" x1="9.313" x2="30.127" y1="15.25" y2="15.25" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#39A7F8"></svg:stop><svg:stop offset="1" stop-color="#54C9FA"></svg:stop></svg:lineargradient><svg:lineargradient id="f2506id1" x1="2.252" x2="3.221" y1="17.813" y2="17.813" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#3A3A3A"></svg:stop><svg:stop offset="1" stop-color="#3A3A3A" stop-opacity="0"></svg:stop></svg:lineargradient><svg:lineargradient id="f2506id2" x1="30.127" x2="29.159" y1="19.332" y2="19.332" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FBF2FF"></svg:stop><svg:stop offset="1" stop-color="#FBF2FF" stop-opacity="0"></svg:stop></svg:lineargradient><svg:lineargradient id="f2506id3" x1="25.065" x2="25.065" y1="6.043" y2="6.754" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FBF2FF"></svg:stop><svg:stop offset="1" stop-color="#FBF2FF" stop-opacity="0"></svg:stop></svg:lineargradient><svg:lineargradient id="f2506id4" x1="8.752" x2="8.752" y1="26.281" y2="25.406" gradientUnits="userSpaceOnUse"><svg:stop offset=".015" stop-color="#693CA6"></svg:stop><svg:stop offset="1" stop-color="#693CA6" stop-opacity="0"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentEmojiTransgenderFlagIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
