import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidReverseOperationOutIcon],svg[icon-park-solid-reverse-operation-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSReverseOperationOut0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M6 5h18v32H6zm18 6h18v32H24z"></svg:path><svg:path stroke="#000" d="m17 17l-4 3.79L16.667 25M31 23l4 3.79L31.333 31"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSReverseOperationOut0)"></svg:path>`,
})
export class IconParkSolidReverseOperationOutIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
