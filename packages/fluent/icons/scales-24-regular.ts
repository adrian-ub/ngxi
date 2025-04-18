import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentScales24RegularIcon],svg[fluent-scales-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3.75A.75.75 0 0 1 3.75 3h16.5a.75.75 0 0 1 0 1.5h-1.042l2.737 6.717A.8.8 0 0 1 22 11.5a3.5 3.5 0 1 1-7 0a.8.8 0 0 1 .055-.283L17.792 4.5H12.75v12h4a2.25 2.25 0 0 1 0 4.5H7.253a2.25 2.25 0 0 1 0-4.5h3.997v-12H6.208l2.737 6.717A.8.8 0 0 1 9 11.5a3.5 3.5 0 1 1-7 0a.8.8 0 0 1 .055-.283L4.792 4.5H3.75A.75.75 0 0 1 3 3.75m3.503 15c0 .414.336.75.75.75h9.497a.75.75 0 0 0 0-1.5H7.253a.75.75 0 0 0-.75.75m.852-6.5h-3.71a2 2 0 0 0 3.71 0m-.22-1.5L5.5 6.738L3.865 10.75zM18.5 13.5a2 2 0 0 0 1.855-1.25h-3.71A2 2 0 0 0 18.5 13.5m-1.635-2.75h3.27L18.5 6.738z"></svg:path>`,
})
export class FluentScales24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
