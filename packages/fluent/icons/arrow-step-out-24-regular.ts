import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowStepOut24RegularIcon],svg[fluent-arrow-step-out-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 13.75a.75.75 0 0 1-1.5 0V4.494l-3.484 3.3a.75.75 0 1 1-1.032-1.088l4.75-4.5a.75.75 0 0 1 1.032 0l4.75 4.5a.75.75 0 0 1-1.032 1.088l-3.484-3.3zM15 19a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-4.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path>`,
})
export class FluentArrowStepOut24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
