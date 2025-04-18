import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSortAmountDownIcon],svg[icon-park-sort-amount-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M23 8H43"></svg:path><svg:path d="M14 41L6 33"></svg:path><svg:path d="M14 7V41"></svg:path><svg:path d="M23 18H39"></svg:path><svg:path d="M23 28H35"></svg:path><svg:path d="M23 38H31"></svg:path></svg:g>`,
})
export class IconParkSortAmountDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
