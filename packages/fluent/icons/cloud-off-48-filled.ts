import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCloudOff48FilledIcon],svg[fluent-cloud-off-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m35.232 37l6.634 6.634a1.25 1.25 0 0 0 1.768-1.768l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768l9.105 9.105A11.9 11.9 0 0 0 12.04 20h-.54a8.5 8.5 0 0 0 0 17zM45 28.5a8.5 8.5 0 0 1-4.436 7.468L16.35 11.754A11.95 11.95 0 0 1 24 9c6.29 0 11.45 4.84 11.959 11h.541a8.5 8.5 0 0 1 8.5 8.5"></svg:path>`,
})
export class FluentCloudOff48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
