import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCircle12RegularIcon],svg[fluent-circle-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8M1 6a5 5 0 1 1 10 0A5 5 0 0 1 1 6"></svg:path>`,
})
export class FluentCircle12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
