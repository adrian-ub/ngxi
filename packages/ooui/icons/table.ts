import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiTableIcon],svg[ooui-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 4h7v4H2zm0 10v-4h7v4zm16 0h-7v-4h7zm0-6h-7V6h7z"></svg:path>`,
})
export class OouiTableIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
