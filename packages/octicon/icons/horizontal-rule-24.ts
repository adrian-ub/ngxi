import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconHorizontalRule24Icon],svg[octicon-horizontal-rule-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12.75a.75.75 0 0 1 .75-.75h18.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class OcticonHorizontalRule24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
