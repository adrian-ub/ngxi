import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentGridCircles28RegularIcon],svg[fluent-grid-circles-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 8A5 5 0 1 0 3 8a5 5 0 0 0 10 0m-1.875 0a3.125 3.125 0 1 1-6.25 0a3.125 3.125 0 0 1 6.25 0M25 8a5 5 0 1 0-10 0a5 5 0 0 0 10 0m-1.875 0a3.125 3.125 0 1 1-6.25 0a3.125 3.125 0 0 1 6.25 0M8 25a5 5 0 1 1 0-10a5 5 0 0 1 0 10m0-1.875a3.125 3.125 0 1 0 0-6.25a3.125 3.125 0 0 0 0 6.25M25 20a5 5 0 1 0-10 0a5 5 0 0 0 10 0m-1.875 0a3.125 3.125 0 1 1-6.25 0a3.125 3.125 0 0 1 6.25 0"></svg:path>`,
})
export class FluentGridCircles28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
