import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCloudArchive28RegularIcon],svg[fluent-cloud-archive-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 5.5a5.5 5.5 0 0 0-5.496 5.28a.75.75 0 0 1-.75.72H7.5a4 4 0 0 0 0 8H14V21H7.5a5.5 5.5 0 0 1-.431-10.983a7.001 7.001 0 0 1 13.862 0A5.5 5.5 0 0 1 25.401 13h-1.778a4 4 0 0 0-3.123-1.5h-.255a.75.75 0 0 1-.75-.72A5.5 5.5 0 0 0 14 5.5m1 8.5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1zm0 9v-5h11v5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3m8-2.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 .5-.5"></svg:path>`,
})
export class FluentCloudArchive28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
