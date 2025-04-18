import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSpinnerIos16RegularIcon],svg[fluent-spinner-ios-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8a6 6 0 1 1 6 6a.5.5 0 0 0 0 1a7 7 0 1 0-7-7a.5.5 0 0 0 1 0"></svg:path>`,
})
export class FluentSpinnerIos16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
