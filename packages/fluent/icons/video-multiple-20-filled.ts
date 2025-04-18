import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVideoMultiple20FilledIcon],svg[fluent-video-multiple-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3zm11.649 5.733L14 11.599V6.402l1.649-1.134c.995-.684 2.35.028 2.35 1.236v4.993c0 1.207-1.355 1.92-2.35 1.236M3.007 6.757Q3 6.877 3 7v4a4 4 0 0 0 4 4h3q.122 0 .243-.007A3 3 0 0 1 8 16H7a5 5 0 0 1-5-5V9c0-.892.39-1.693 1.007-2.243"></svg:path>`,
})
export class FluentVideoMultiple20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
