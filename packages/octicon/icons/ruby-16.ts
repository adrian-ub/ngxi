import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconRuby16Icon],svg[octicon-ruby-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.637 2.291A.75.75 0 0 1 4.23 2h7.54c.232 0 .451.107.593.291l3.48 4.5a.75.75 0 0 1-.072.999l-7.25 7a.75.75 0 0 1-1.042 0l-7.25-7a.75.75 0 0 1-.072-.999ZM4.598 3.5L1.754 7.177L8 13.207l6.246-6.03L11.402 3.5Z"></svg:path>`,
})
export class OcticonRuby16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
