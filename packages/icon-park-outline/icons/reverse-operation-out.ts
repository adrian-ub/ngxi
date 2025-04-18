import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineReverseOperationOutIcon],svg[icon-park-outline-reverse-operation-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 5h18v32H6zm18 6h18v32H24z"></svg:path><svg:path d="m17 17l-4 3.79L16.667 25M31 23l4 3.79L31.333 31"></svg:path></svg:g>`,
})
export class IconParkOutlineReverseOperationOutIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
