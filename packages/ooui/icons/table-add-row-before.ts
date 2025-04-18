import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiTableAddRowBeforeIcon],svg[ooui-table-add-row-before-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 20v-8h1V0H2v12h1v8zM9 10V7H6V5h3V2h2v3h3v2h-3v3zm-4 4v-2h10v2zm0 4v-2h10v2z"></svg:path>`,
})
export class OouiTableAddRowBeforeIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
