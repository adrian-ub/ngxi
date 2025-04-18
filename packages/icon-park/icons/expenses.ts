import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkExpensesIcon],svg[icon-park-expenses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M31 34L43 34"></svg:path><svg:path d="M38 39L43 34L38.0004 29"></svg:path><svg:path d="M43 26V10C43 8.34315 41.6569 7 40 7H8C6.34315 7 5 8.34315 5 10V38C5 39.6569 6.34315 41 8 41H28.4706"></svg:path><svg:path d="M15 15L20 21L25 15"></svg:path><svg:path d="M14 27H26"></svg:path><svg:path d="M14 21H26"></svg:path><svg:path d="M20 21V33"></svg:path></svg:g>`,
})
export class IconParkExpensesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
