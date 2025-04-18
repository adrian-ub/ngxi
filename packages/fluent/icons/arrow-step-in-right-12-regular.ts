import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowStepInRight12RegularIcon],svg[fluent-arrow-step-in-right-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 6a.5.5 0 0 1 .5-.5h3.793L4.146 4.354a.5.5 0 1 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 1 1-.708-.708L5.293 6.5H1.5A.5.5 0 0 1 1 6m8.5-1.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m0 1a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1"></svg:path>`,
})
export class FluentArrowStepInRight12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
