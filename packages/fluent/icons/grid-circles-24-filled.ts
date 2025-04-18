import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentGridCircles24FilledIcon],svg[fluent-grid-circles-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 11a4 4 0 1 0 0-8a4 4 0 0 0 0 8m10 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8m-6 6a4 4 0 1 1-8 0a4 4 0 0 1 8 0m6 4a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path>`,
})
export class FluentGridCircles24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
