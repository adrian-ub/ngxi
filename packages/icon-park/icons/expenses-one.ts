import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkExpensesOneIcon],svg[icon-park-expenses-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M30 36L35 31L30.0004 26"></svg:path><svg:path d="M38 36L43 31L38.0004 26"></svg:path><svg:path d="M43 22V9C43 7.89543 42.1046 7 41 7H7C5.89543 7 5 7.89543 5 9V39C5 40.1046 5.89543 41 7 41H28.4706"></svg:path><svg:path d="M13 15L18 21L23 15"></svg:path><svg:path d="M12 27H24"></svg:path><svg:path d="M12 21H24"></svg:path><svg:path d="M18 21V33"></svg:path></svg:g>`,
})
export class IconParkExpensesOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
