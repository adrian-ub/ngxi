import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowCircleLeft28RegularIcon],svg[fluent-arrow-circle-left-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.78 19.03a.75.75 0 0 0 0-1.06l-3.22-3.22h8.69a.75.75 0 0 0 0-1.5h-8.69l3.22-3.22a.75.75 0 1 0-1.06-1.06l-4.5 4.5a.75.75 0 0 0 0 1.06l4.5 4.5a.75.75 0 0 0 1.06 0M14 26c6.627 0 12-5.373 12-12S20.627 2 14 2S2 7.373 2 14s5.373 12 12 12m10.5-12c0 5.799-4.701 10.5-10.5 10.5S3.5 19.799 3.5 14S8.201 3.5 14 3.5S24.5 8.201 24.5 14"></svg:path>`,
})
export class FluentArrowCircleLeft28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
