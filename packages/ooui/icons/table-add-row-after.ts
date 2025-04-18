import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiTableAddRowAfterIcon],svg[ooui-table-add-row-after-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0v8H2v12h16V8h-1V0zm8 10v3h3v2h-3v3H9v-3H6v-2h3v-3zm4-4v2H5V6zm0-4v2H5V2z"></svg:path>`,
})
export class OouiTableAddRowAfterIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
