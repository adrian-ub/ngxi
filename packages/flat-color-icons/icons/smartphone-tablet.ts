import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsSmartphoneTabletIcon],svg[flat-color-icons-smartphone-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#37474F" d="M4 39V7c0-2.2 1.8-4 4-4h22c2.2 0 4 1.8 4 4v32c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4"></svg:path><svg:path fill="#BBDEFB" d="M30 6H8c-.6 0-1 .4-1 1v29c0 .6.4 1 1 1h22c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1"></svg:path><svg:path fill="#78909C" d="M15 39h6v2h-6z"></svg:path><svg:path fill="#E38939" d="M24 41V17c0-2.2 1.8-4 4-4h12c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4H28c-2.2 0-4-1.8-4-4"></svg:path><svg:path fill="#FFF3E0" d="M40 16H28c-.6 0-1 .4-1 1v22c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V17c0-.6-.4-1-1-1"></svg:path><svg:circle cx="34" cy="42.5" r="1.5" fill="#A6642A"></svg:circle>`,
})
export class FlatColorIconsSmartphoneTabletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
