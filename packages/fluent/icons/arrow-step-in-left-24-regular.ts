import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowStepInLeft24RegularIcon],svg[fluent-arrow-step-in-left-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.295 16.234a.75.75 0 0 1-1.09 1.032l-4.5-4.75a.75.75 0 0 1 0-1.032l4.5-4.75a.75.75 0 0 1 1.09 1.032l-3.301 3.484h9.256a.75.75 0 0 1 0 1.5h-9.256zM2 12a3 3 0 1 1 6 0a3 3 0 0 1-6 0m1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path>`,
})
export class FluentArrowStepInLeft24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
