import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconRubyIcon],svg[codicon-ruby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m1 7.19l6.64 6.64h.72L15 7.19v-.72l-3.32-3.32l-.36-.15H4.68l-.36.15L1 6.47zm7 5.56L2.08 6.83L4.89 4h6.22l2.81 2.83zm0-7.73h2.69l1.81 1.81l-4.5 4.4z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconRubyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
