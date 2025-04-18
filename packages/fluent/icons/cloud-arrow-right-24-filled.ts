import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCloudArrowRight24FilledIcon],svg[fluent-cloud-arrow-right-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a6 6 0 0 0-5.92 5.02A4.5 4.5 0 0 0 6.5 17h3.519a6.5 6.5 0 0 1 11.955-4.008Q22 12.75 22 12.5a4.5 4.5 0 0 0-4.08-4.48A6 6 0 0 0 12 3m4.5 8a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11m-3 5a.5.5 0 0 0 0 1h4.793l-1.647 1.646a.5.5 0 0 0 .708.708l2.5-2.5a.5.5 0 0 0 0-.708l-2.5-2.5a.5.5 0 0 0-.708.708L18.293 16z"></svg:path>`,
})
export class FluentCloudArrowRight24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
