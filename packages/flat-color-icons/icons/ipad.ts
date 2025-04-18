import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsIpadIcon],svg[flat-color-icons-ipad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#E38939" d="M8 41V7c0-2.2 1.8-4 4-4h24c2.2 0 4 1.8 4 4v34c0 2.2-1.8 4-4 4H12c-2.2 0-4-1.8-4-4"></svg:path><svg:path fill="#FFF3E0" d="M36 6H12c-.6 0-1 .4-1 1v31c0 .6.4 1 1 1h24c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1"></svg:path><svg:circle cx="24" cy="42" r="1.5" fill="#A6642A"></svg:circle>`,
})
export class FlatColorIconsIpadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
