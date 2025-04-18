import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentGridCircles28FilledIcon],svg[fluent-grid-circles-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10m12 0a5 5 0 1 0 0-10a5 5 0 0 0 0 10m-7 7a5 5 0 1 1-10 0a5 5 0 0 1 10 0m7 5a5 5 0 1 0 0-10a5 5 0 0 0 0 10"></svg:path>`,
})
export class FluentGridCircles28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
