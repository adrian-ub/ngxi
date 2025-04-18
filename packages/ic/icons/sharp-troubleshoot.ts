import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpTroubleshootIcon],svg[ic-sharp-troubleshoot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 20.59l-4.69-4.69A7.9 7.9 0 0 0 19 11c0-4.42-3.58-8-8-8c-4.08 0-7.44 3.05-7.93 7h2.02C5.57 7.17 8.03 5 11 5c3.31 0 6 2.69 6 6s-2.69 6-6 6c-2.42 0-4.5-1.44-5.45-3.5H3.4C4.45 16.69 7.46 19 11 19c1.85 0 3.55-.63 4.9-1.69L20.59 22z"></svg:path><svg:path fill="currentColor" d="M8.43 9.69L9.65 15h1.64l1.26-3.78l.95 2.28h2V12h-1l-1.25-3h-1.54l-1.12 3.37L9.35 7H7.7l-1.25 4H1v1.5h6.55z"></svg:path>`,
})
export class IcSharpTroubleshootIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
