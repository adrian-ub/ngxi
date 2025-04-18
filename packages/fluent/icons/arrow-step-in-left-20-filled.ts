import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowStepInLeft20FilledIcon],svg[fluent-arrow-step-in-left-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 12a2 2 0 1 1 0-4a2 2 0 0 1 0 4m14-2a.5.5 0 0 1-.5.5H9.707l3.147 3.146a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708.708L9.707 9.5H17.5a.5.5 0 0 1 .5.5"></svg:path>`,
})
export class FluentArrowStepInLeft20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
