import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexLinkedinIcon],svg[codex-linkedin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:rect width="14" height="14" x="5" y="5" rx="4"></svg:rect><svg:path stroke-linecap="round" d="M9 11.4v4m0-6.7v.01m3 2.69v.6m0 3.4V12m0 0c2-.5 3-.639 3 .5v2.9"></svg:path></svg:g>`,
})
export class CodexLinkedinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
