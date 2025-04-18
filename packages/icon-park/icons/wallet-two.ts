import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkWalletTwoIcon],svg[icon-park-wallet-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M4 8H44V16C44 16 34 18 34 24C34 30 44 32 44 32V40H4V8Z"></svg:path><svg:path stroke-linecap="round" d="M44 24H42"></svg:path></svg:g>`,
})
export class IconParkWalletTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
