import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSortAmountUpIcon],svg[icon-park-sort-amount-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M23 9H43"></svg:path><svg:path d="M5 16L13 8"></svg:path><svg:path d="M13 8V42"></svg:path><svg:path d="M23 19H39"></svg:path><svg:path d="M23 29H35"></svg:path><svg:path d="M23 39H31"></svg:path></svg:g>`,
})
export class IconParkSortAmountUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
