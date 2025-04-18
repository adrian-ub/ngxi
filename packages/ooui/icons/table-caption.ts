import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiTableCaptionIcon],svg[ooui-table-caption-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm0 2h7v2H2zm0 6v-2h7v2zm16 0h-7v-2h7zm0-4h-7v-2h7zM2 2h16v4H2z"></svg:path>`,
})
export class OouiTableCaptionIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
