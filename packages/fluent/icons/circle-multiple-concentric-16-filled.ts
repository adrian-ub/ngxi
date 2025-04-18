import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCircleMultipleConcentric16FilledIcon],svg[fluent-circle-multiple-concentric-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 8a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M5.5 8a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0M8 4a4 4 0 1 0 0 8a4 4 0 0 0 0-8"></svg:path>`,
})
export class FluentCircleMultipleConcentric16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
