import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRightRunIcon],svg[icon-park-outline-right-run-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 5h18v32H6zm18 6h18v32H24z"></svg:path><svg:path d="m13 17l4 3.79L13.333 25M31 23l4 3.79L31.333 31"></svg:path></svg:g>`,
})
export class IconParkOutlineRightRunIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
