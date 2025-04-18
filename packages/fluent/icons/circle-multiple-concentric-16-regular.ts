import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCircleMultipleConcentric16RegularIcon],svg[fluent-circle-multiple-concentric-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m6-7a7 7 0 1 0 0 14A7 7 0 0 0 8 1M5 8a3 3 0 1 1 6 0a3 3 0 0 1-6 0m3-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8"></svg:path>`,
})
export class FluentCircleMultipleConcentric16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
