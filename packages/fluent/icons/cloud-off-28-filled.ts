import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCloudOff28FilledIcon],svg[fluent-cloud-off-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l5.54 5.542a7 7 0 0 0-.692 2.195A5.5 5.5 0 0 0 7.5 22h13q.213 0 .423-.016l3.796 3.796a.75.75 0 0 0 1.061-1.06zm6.396 4.275l14.282 14.282a5.5 5.5 0 0 0-3.027-9.76A7.001 7.001 0 0 0 9.676 6.495"></svg:path>`,
})
export class FluentCloudOff28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
