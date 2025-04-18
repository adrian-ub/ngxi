import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTrophySolidIcon],svg[streamline-trophy-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 .75A.75.75 0 0 1 .75 0h2.885l.055.002h6.621L10.365 0h2.885a.75.75 0 0 1 .75.75v2.885a3.635 3.635 0 0 1-3.197 3.609A4 4 0 0 1 7.75 9.93v2.57h2.615a.75.75 0 0 1 0 1.5H3.634a.75.75 0 0 1 0-1.5H6.25V9.93a4 4 0 0 1-3.053-2.686A3.635 3.635 0 0 1 0 3.635zm2.885 4.884V1.5H1.5v2.135c0 .915.576 1.696 1.385 2Zm8.23-4.134v4.134A2.135 2.135 0 0 0 12.5 3.635V1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineTrophySolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
