import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePaperMoneyIcon],svg[icon-park-outline-paper-money-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M39 7H9a5 5 0 0 0-5 5v24a5 5 0 0 0 5 5h30a5 5 0 0 0 5-5V12a5 5 0 0 0-5-5Z"></svg:path><svg:path stroke-linecap="round" d="m18 15l6 6l6-6m-13 8h14m-14 6h14m-7-6v11"></svg:path></svg:g>`,
})
export class IconParkOutlinePaperMoneyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
