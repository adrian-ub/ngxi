import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedLcdIcon],svg[token-branded-lcd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#4747F3" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18"></svg:path><svg:path fill="#7C7CF4" d="M12 20.66a8.661 8.661 0 1 0 0-17.322a8.661 8.661 0 0 0 0 17.322"></svg:path><svg:path fill="#A2A2F8" d="M12 20.284a8.285 8.285 0 1 0 0-16.57a8.285 8.285 0 0 0 0 16.57"></svg:path><svg:path fill="#C4C5FB" d="M12 19.845a7.846 7.846 0 1 0 0-15.692a7.846 7.846 0 0 0 0 15.692"></svg:path><svg:path fill="#E0E0FC" d="M12 19.333a7.332 7.332 0 1 0 0-14.665a7.332 7.332 0 0 0 0 14.665"></svg:path><svg:path fill="#F0F3FA" d="M12 18.507a6.507 6.507 0 1 0 0-13.013a6.507 6.507 0 0 0 0 13.013"></svg:path><svg:path fill="#2A28F5" d="M9.353 12.122v3.584h5.294v-1.588H11.47v-1.403a10 10 0 0 1-2.117-.593m0-1.446a21 21 0 0 0 2.117.678v-3.59H9.353z"></svg:path></svg:g>`,
})
export class TokenBrandedLcdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
