import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenPlastikIcon],svg[token-plastik-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 12.003a9 9 0 1 1-2.728-6.458l-1.21 1.187a7.313 7.313 0 1 0 2.082 3.747l-4.275 4.218l-.225.214v.011A3.938 3.938 0 1 1 14.66 9.1l-1.21 1.187a2.25 2.25 0 1 0 .023 3.414l.197-.196l.095-.113l2.104-2.081v.022l2.66-2.615v-.006l1.25-1.237A8.96 8.96 0 0 1 21 12.003"></svg:path>`,
})
export class TokenPlastikIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
