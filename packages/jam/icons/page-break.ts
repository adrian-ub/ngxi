import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamPageBreakIcon],svg[jam-page-break-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 6h2a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2m10 0h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2M6 6h2a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2M0 1a1 1 0 1 1 2 0v2.014h10V1a1 1 0 0 1 2 0v2.014a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm0 12.014V11a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2.014a1 1 0 0 1-2 0V11H2v2.014a1 1 0 0 1-2 0"></svg:path>`,
})
export class JamPageBreakIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
