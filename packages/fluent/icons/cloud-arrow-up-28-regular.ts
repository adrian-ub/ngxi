import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCloudArrowUp28RegularIcon],svg[fluent-cloud-arrow-up-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4.5a5.5 5.5 0 0 0-5.496 5.28a.75.75 0 0 1-.75.72H7.5a4 4 0 0 0 0 8h4.566a7.6 7.6 0 0 0-.05 1.5H7.5a5.5 5.5 0 0 1-.431-10.983a7.001 7.001 0 0 1 13.862 0a5.5 5.5 0 0 1 4.963 6.561a7.5 7.5 0 0 0-1.444-1.713A4 4 0 0 0 20.5 10.5h-.255a.75.75 0 0 1-.75-.72A5.5 5.5 0 0 0 14 4.5m12 15a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0m-7 4a.5.5 0 0 0 1 0v-6.793l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.351-.146h-.006a.5.5 0 0 0-.35.146l-3 3a.5.5 0 0 0 .707.708L19 16.707z"></svg:path>`,
})
export class FluentCloudArrowUp28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
