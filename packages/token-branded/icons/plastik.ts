import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedPlastikIcon],svg[token-branded-plastik-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedPlastik0)" d="M21 12.003a9 9 0 1 1-2.728-6.458l-1.21 1.187a7.313 7.313 0 1 0 2.082 3.746l-4.275 4.22l-.225.213v.011A3.938 3.938 0 1 1 14.66 9.1l-1.21 1.187a2.251 2.251 0 1 0 .023 3.414l.197-.196l.095-.113l2.104-2.081v.022l2.66-2.615v-.006l1.25-1.237A8.96 8.96 0 0 1 21 12.003"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedPlastik0" x1="12" x2="12" y1="3.003" y2="21.003" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0440A8"></svg:stop><svg:stop offset=".59" stop-color="#00B4B0"></svg:stop><svg:stop offset="1" stop-color="#02BFA1"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedPlastikIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
