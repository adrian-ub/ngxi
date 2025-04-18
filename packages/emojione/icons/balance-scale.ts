import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneBalanceScaleIcon],svg[emojione-balance-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0d0d0" d="M23.6 36.7H2.9l10.3-26.2zm-18-1.9h15.3l-7.7-19.5zm55.5 1.9H40.4l10.3-26.2zm-18-1.9h15.3l-7.7-19.5z"></svg:path><svg:path fill="#b8c2c4" d="M50.3 10.2s-2.2-.8-3.4-1.3C42.6 7.1 37.3 5 32 5S21.4 7.2 17.1 9c-1.2.5-3.4 1.3-3.4 1.3l-3.3 2.5s2.7 1.7 4 1.2c1.1-.4 2.2-.9 3.5-1.4C22 10.9 27.1 8.8 32 8.8s10 2.1 14.1 3.8c1.2.5 2.4 1 3.5 1.4c1.4.5 4-1.2 4-1.2z"></svg:path><svg:path fill="#428bc1" d="M2 34.8C2 41 7 46 13.2 46s11.2-5 11.2-11.2zm37.5 0c0 6.2 5 11.2 11.2 11.2S62 41 62 34.8z"></svg:path><svg:path fill="#b8c2c4" d="M30.1 12.3h3.8v41.2h-3.8z"></svg:path><svg:path fill="#d0d0d0" d="M29 18.6h6.1v34.9H29z"></svg:path><svg:path fill="#545b60" d="M27.7 36.7h8.6v19.7h-8.6z"></svg:path><svg:circle cx="13.2" cy="13.2" r="3.8" fill="#dbb471"></svg:circle><svg:g fill="#545b60"><svg:circle cx="50.8" cy="13.2" r="3.8"></svg:circle><svg:circle cx="13.2" cy="13.2" r="3.8"></svg:circle></svg:g><svg:g fill="#fff"><svg:circle cx="13.2" cy="13.2" r="1.9"></svg:circle><svg:circle cx="50.8" cy="13.2" r="1.9"></svg:circle></svg:g><svg:g fill="#d0d0d0"><svg:circle cx="32" cy="7.6" r="5.6"></svg:circle><svg:path d="M32 45.1c-8.3 0-15 4.2-15 9.4h30c0-5.2-6.7-9.4-15-9.4"></svg:path></svg:g><svg:path fill="#545b60" d="M15.1 54.5h33.8v3.8H15.1z"></svg:path><svg:path fill="#6b767c" d="M11.4 58.2h41.2V62H11.4z"></svg:path>`,
})
export class EmojioneBalanceScaleIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
