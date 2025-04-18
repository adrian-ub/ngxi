import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedMasqIcon],svg[token-branded-masq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedMasq0)" d="M17.536 5.199c-2.906-2.932-8.163-2.932-11.07 0c-2.905 2.932-2.905 8.142 0 11.08l2.45 2.046v-1.877c0-1.07.58-2.875 2.226-4.341a253 253 0 0 1 3.364-2.937l.067.133l-2.536 2.438c-.514.67-1.543 2.433-1.543 4.146c0 1.857.7 3.662 1.919 5.113l5.123-5.175a7.57 7.57 0 0 0 0-10.626"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedMasq0" x1="12" x2="12" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#00C0FF"></svg:stop><svg:stop offset="1" stop-color="#0188FE"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedMasqIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
