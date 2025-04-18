import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCreditIcon],svg[icon-park-credit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M38 15V7H10V15"></svg:path><svg:path d="M43 27V15H5V41H43"></svg:path><svg:path d="M29 27L24 34L43 34"></svg:path><svg:path d="M26 21H22"></svg:path><svg:path d="M16 21H12"></svg:path></svg:g>`,
})
export class IconParkCreditIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
