import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDepositIcon],svg[icon-park-deposit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 16V44H36V16"></svg:path><svg:path d="M19 20L24 26L29 20"></svg:path><svg:path d="M18 32H30"></svg:path><svg:path d="M18 26H30"></svg:path><svg:path d="M24 26V38"></svg:path><svg:path d="M14 10L23.6154 10L34 10"></svg:path><svg:path d="M36 18H42V4H6V18H12"></svg:path></svg:g>`,
})
export class IconParkDepositIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
