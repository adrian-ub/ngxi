import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiPasteRtlIcon],svg[ooui-paste-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3H9v2H7V3c0-1.1.895-2 2-2h8c1.1 0 2 .895 2 2v8c0 1.1-.895 2-2 2h-2v-2h2zm-4 12v2c0 1.1-.895 2-2 2H3c-1.1 0-2-.895-2-2V9c0-1.1.895-2 2-2h2v2H3v8h8v-2z"></svg:path><svg:path fill="currentColor" d="M10 5h2v3h3v2h-3v3h-2v-3H7V8h3z"></svg:path>`,
})
export class OouiPasteRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
