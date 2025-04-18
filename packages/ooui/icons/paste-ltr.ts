import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiPasteLtrIcon],svg[ooui-paste-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h8v2h2V3c0-1.1-.895-2-2-2H3c-1.1 0-2 .895-2 2v8c0 1.1.895 2 2 2h2v-2H3zm4 12v2c0 1.1.895 2 2 2h8c1.1 0 2-.895 2-2V9c0-1.1-.895-2-2-2h-2v2h2v8H9v-2z"></svg:path><svg:path fill="currentColor" d="M10 5H8v3H5v2h3v3h2v-3h3V8h-3z"></svg:path>`,
})
export class OouiPasteLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
