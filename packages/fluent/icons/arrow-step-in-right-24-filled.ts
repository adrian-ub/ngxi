import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowStepInRight24FilledIcon],svg[fluent-arrow-step-in-right-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.706 16.234a.75.75 0 1 0 1.088 1.032l4.5-4.75a.75.75 0 0 0 0-1.032l-4.5-4.75a.75.75 0 0 0-1.088 1.032l3.3 3.484H2.75a.75.75 0 0 0 0 1.5h9.256zM22 12a3 3 0 1 0-6 0a3 3 0 0 0 6 0"></svg:path>`,
})
export class FluentArrowStepInRight24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
