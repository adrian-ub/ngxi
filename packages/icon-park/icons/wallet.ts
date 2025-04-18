import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkWalletIcon],svg[icon-park-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M17.982 11.9689L31.7846 4L36.397 11.9889L17.982 11.9689Z" clip-rule="evenodd"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M4 14C4 12.8954 4.89543 12 6 12H42C43.1046 12 44 12.8954 44 14V42C44 43.1046 43.1046 44 42 44H6C4.89543 44 4 43.1046 4 42V14Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linejoin="round" d="M35.25 33H44V23H35.25C32.3505 23 30 25.2386 30 28C30 30.7614 32.3505 33 35.25 33Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M44 16.5V40.5"></svg:path></svg:g>`,
})
export class IconParkWalletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
