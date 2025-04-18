import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCircle16RegularIcon],svg[fluent-circle-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12m0-1A5 5 0 1 1 8 3a5 5 0 0 1 0 10"></svg:path>`,
})
export class FluentCircle16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
