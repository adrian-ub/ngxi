import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowStepInDiagonalDownLeft20RegularIcon],svg[fluent-arrow-step-in-diagonal-down-left-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.854 3.146a.5.5 0 0 1 0 .708L9.707 11H14.5a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 1 0v4.793l7.146-7.147a.5.5 0 0 1 .708 0M7 15a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-1 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0"></svg:path>`,
})
export class FluentArrowStepInDiagonalDownLeft20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
