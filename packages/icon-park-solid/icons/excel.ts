import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidExcelIcon],svg[icon-park-solid-excel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSExcel0"><svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path stroke="#fff" stroke-linejoin="round" d="M8 15V6a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v36a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-9"></svg:path><svg:path stroke="#fff" d="M31 15h3m-6 8h6m-6 8h6"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" d="M4 15h18v18H4z"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="m10 21l6 6m0-6l-6 6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSExcel0)"></svg:path>`,
})
export class IconParkSolidExcelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
