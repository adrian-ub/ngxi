import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconHorizontalRule16Icon],svg[octicon-horizontal-rule-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7.75A.75.75 0 0 1 .75 7h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 7.75"></svg:path>`,
})
export class OcticonHorizontalRule16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
