import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedGlinkIcon],svg[token-branded-glink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedGlink0)" fill-rule="evenodd" d="M15.6 6.6L12.005 3L8.4 6.6zm-1.43-.585l-2.165-2.173L9.83 6.01h4.338z" clip-rule="evenodd"></svg:path><svg:path fill="url(#tokenBrandedGlink1)" fill-rule="evenodd" d="M15.6 17.4L12.005 21L8.4 17.4zm-1.43.585l-2.165 2.174l-2.174-2.17h4.338z" clip-rule="evenodd"></svg:path><svg:path fill="url(#tokenBrandedGlink2)" fill-rule="evenodd" d="M6.6 8.4L3 11.994l3.6 3.604zm-.585 1.43l-2.173 2.165l2.169 2.173V9.83z" clip-rule="evenodd"></svg:path><svg:path fill="url(#tokenBrandedGlink3)" fill-rule="evenodd" d="m17.4 8.418l3.6 3.595l-3.6 3.6v-7.2zm.585 1.43l2.173 2.165l-2.169 2.174V9.849z" clip-rule="evenodd"></svg:path><svg:path fill="url(#tokenBrandedGlink4)" d="M6.6 15.57v1.83h1.83zm8.968 1.83H17.4v-1.83zM17.4 8.433V6.601h-1.832zM8.43 6.601H6.6v1.831z"></svg:path><svg:path fill="url(#tokenBrandedGlink5)" d="m10.637 12.823l.27.265a1.625 1.625 0 0 0 2.295 0l1.471-1.471a1.623 1.623 0 0 0-2.295-2.295l-.778.779c.243-.046.806-.068 1.13.152l.283-.283a.729.729 0 0 1 1.03 1.03l-1.503 1.495a.67.67 0 0 1-.94 0c-.063-.068-.202-.27-.225-.419l-.738.742zm2.727-1.647l-.27-.265a1.625 1.625 0 0 0-2.295 0l-1.472 1.471a1.623 1.623 0 1 0 2.295 2.295l.779-.778c-.243.045-.806.067-1.13-.153l-.283.283a.728.728 0 0 1-1.03-1.03L11.46 11.5a.666.666 0 0 1 .941 0c.063.068.202.27.225.418z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedGlink0" x1="12" x2="12" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#BD8E3C"></svg:stop><svg:stop offset="1" stop-color="#EBCF66"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedGlink1" x1="12" x2="12" y1="21" y2="3" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#EBC759"></svg:stop><svg:stop offset="1" stop-color="#C78B35"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedGlink2" x1="18.458" x2="18.458" y1="6.959" y2="19.897" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#C98B36"></svg:stop><svg:stop offset="1" stop-color="#E5C651"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedGlink3" x1="3" x2="3" y1="4.091" y2="18.941" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#C6883B"></svg:stop><svg:stop offset="1" stop-color="#E8CA63"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedGlink4" x1="2.34" x2="20.295" y1="4.336" y2="21.001" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#C18843"></svg:stop><svg:stop offset="1" stop-color="#E9D055"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedGlink5" x1="9.571" x2="14.489" y1="14.556" y2="9.871" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#C68E3B"></svg:stop><svg:stop offset="1" stop-color="#E4C247"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedGlinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
