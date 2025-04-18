import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlipHorizontal24FilledIcon],svg[fluent-flip-horizontal-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.837 19.547A1 1 0 0 1 21 20h-7a1 1 0 0 1-1-1V3a1 1 0 0 1 1.916-.4l7 16a1 1 0 0 1-.08.947M15 7.781V18h4.471zM2.5 20a.5.5 0 0 1-.452-.713l8-17A.5.5 0 0 1 11 2.5v17a.5.5 0 0 1-.5.5z"></svg:path>`,
})
export class FluentFlipHorizontal24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
