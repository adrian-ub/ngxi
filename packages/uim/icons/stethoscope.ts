import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimStethoscopeIcon],svg[uim-stethoscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 14a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3M8 15a6.007 6.007 0 0 1-6-6V3a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H4v5a4 4 0 0 0 8 0V4h-1a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v6a6.007 6.007 0 0 1-6 6" opacity=".5"></svg:path><svg:path fill="currentColor" d="M19 14a3 3 0 0 1-1-.184V15.5a4.5 4.5 0 0 1-9 0v-.59a5.6 5.6 0 0 1-2 0v.59a6.5 6.5 0 0 0 13 0v-1.684A3 3 0 0 1 19 14"></svg:path>`,
})
export class UimStethoscopeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
