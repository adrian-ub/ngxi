import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineExpensesOneIcon],svg[icon-park-outline-expenses-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m30 36l5-5l-5-5m8 10l5-5l-5-5"></svg:path><svg:path d="M43 22V9a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h21.47"></svg:path><svg:path d="m13 15l5 6l5-6M12 27h12m-12-6h12m-6 0v12"></svg:path></svg:g>`,
})
export class IconParkOutlineExpensesOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
