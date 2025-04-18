import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiAdhesiveBandageIcon],svg[twemoji-adhesive-bandage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D99E82" d="M2.92 21.393L21.393 2.92A8.264 8.264 0 0 1 33.08 14.607L14.607 33.08A8.264 8.264 0 0 1 2.92 21.393"></svg:path><svg:g fill="#C1694F"><svg:circle cx="4.389" cy="25.778" r=".972"></svg:circle><svg:circle cx="7.306" cy="28.694" r=".972"></svg:circle><svg:circle cx="10.222" cy="31.611" r=".972"></svg:circle><svg:circle cx="7.306" cy="22.861" r=".972"></svg:circle><svg:circle cx="10.222" cy="25.778" r=".972"></svg:circle><svg:circle cx="13.139" cy="28.694" r=".972"></svg:circle><svg:path d="M21.896 7.189a.972.972 0 1 1 1.93.232a.972.972 0 0 1-1.93-.232"></svg:path><svg:circle cx="25.778" cy="10.222" r=".972"></svg:circle><svg:circle cx="28.694" cy="13.139" r=".972"></svg:circle><svg:circle cx="25.778" cy="4.389" r=".972"></svg:circle><svg:circle cx="28.694" cy="7.306" r=".972"></svg:circle><svg:circle cx="31.611" cy="10.222" r=".972"></svg:circle></svg:g><svg:path fill="#EABAA7" d="M6.82 17.514L17.512 6.819L29.18 18.486L18.486 29.18z"></svg:path><svg:path fill="#F7DED5" d="M9.799 18.423a.972.972 0 0 1-.687-1.66l7.715-7.715a.972.972 0 1 1 1.375 1.375l-7.715 7.715a.97.97 0 0 1-.688.285"></svg:path>`,
})
export class TwemojiAdhesiveBandageIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
