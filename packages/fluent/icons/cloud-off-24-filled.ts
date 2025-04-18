import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCloudOff24FilledIcon],svg[fluent-cloud-off-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l4.633 4.634a6 6 0 0 0-.773 2.105A4.5 4.5 0 0 0 6.5 19h11q.213 0 .42-.02l2.8 2.8a.75.75 0 0 0 1.06-1.06zM22 14.5a4.5 4.5 0 0 1-1.228 3.09L8.99 5.808a6 6 0 0 1 8.93 4.211A4.5 4.5 0 0 1 22 14.5"></svg:path>`,
})
export class FluentCloudOff24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
