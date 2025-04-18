import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTarget16RegularIcon],svg[fluent-target-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2M4.5 8a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0M8 5.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M2 8a6 6 0 1 1 12.001 0A6 6 0 0 1 2 8m6-5a5 5 0 1 0 0 10.001A5 5 0 0 0 8 3"></svg:path>`,
})
export class FluentTarget16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
