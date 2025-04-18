import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBlockchainIcon],svg[icon-park-blockchain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40 30V15L27.5 7.96875M20.5 7.96875L8 15V30M11 34.6875L24 42L32 37.5L37 34.6875"></svg:path><svg:path fill="#2F88FF" d="M21 18.75L18 20.5V24V27.5L21 29.25L24 31L27 29.25L30 27.5V24V20.5L27 18.75L24 17L21 18.75Z"></svg:path><svg:path d="M24 17V10"></svg:path><svg:path d="M30 27L37 31"></svg:path><svg:path d="M18 27L11 31"></svg:path><svg:circle cx="24" cy="7" r="3" fill="#2F88FF"></svg:circle><svg:circle cx="8" cy="33" r="3" fill="#2F88FF"></svg:circle><svg:circle cx="40" cy="33" r="3" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkBlockchainIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
