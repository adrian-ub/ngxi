import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBuyIcon],svg[icon-park-buy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linejoin="round" d="M6 15H42L40 42H8L6 15Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M16 19V6H32V19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 34H32"></svg:path></svg:g>`,
})
export class IconParkBuyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
