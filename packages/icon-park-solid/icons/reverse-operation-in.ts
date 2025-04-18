import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidReverseOperationInIcon],svg[icon-park-solid-reverse-operation-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSReverseOperationIn0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M6 5h18v32H6zm18 6h18v32H24z"></svg:path><svg:path stroke="#000" d="m13 17l4 3.79L13.333 25M35 23l-4 3.79L34.667 31"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSReverseOperationIn0)"></svg:path>`,
})
export class IconParkSolidReverseOperationInIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
