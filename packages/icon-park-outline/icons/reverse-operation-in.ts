import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineReverseOperationInIcon],svg[icon-park-outline-reverse-operation-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 5h18v32H6zm18 6h18v32H24z"></svg:path><svg:path d="m13 17l4 3.79L13.333 25M35 23l-4 3.79L34.667 31"></svg:path></svg:g>`,
})
export class IconParkOutlineReverseOperationInIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
