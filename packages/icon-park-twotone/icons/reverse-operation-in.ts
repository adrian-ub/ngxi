import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneReverseOperationInIcon],svg[icon-park-twotone-reverse-operation-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTReverseOperationIn0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M6 5h18v32H6zm18 6h18v32H24z"></svg:path><svg:path d="m13 17l4 3.79L13.333 25M35 23l-4 3.79L34.667 31"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTReverseOperationIn0)"></svg:path>`,
})
export class IconParkTwotoneReverseOperationInIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
