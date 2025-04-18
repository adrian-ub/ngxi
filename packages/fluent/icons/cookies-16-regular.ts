import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCookies16RegularIcon],svg[fluent-cookies-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8a7 7 0 0 1 8.022-6.926a.5.5 0 0 1 .338.781a2 2 0 0 0 1.273 3.111a.5.5 0 0 1 .4.401a2 2 0 0 0 3.112 1.273a.5.5 0 0 1 .78.338Q15 7.479 15 8A7 7 0 1 1 1 8m7-6a6 6 0 1 0 5.998 5.83a3 3 0 0 1-3.869-1.959A3 3 0 0 1 8.17 2.002zm.75 6a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-3.5 3.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m.25-5.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M9.75 12a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5"></svg:path>`,
})
export class FluentCookies16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
