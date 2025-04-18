import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRunLeftIcon],svg[icon-park-outline-run-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 5h18v32H6zm18 6h18v32H24z"></svg:path><svg:path d="m17 17l-4 3.79L16.667 25M35 23l-4 3.79L34.667 31"></svg:path></svg:g>`,
})
export class IconParkOutlineRunLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
