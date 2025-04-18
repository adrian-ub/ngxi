import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSquareRoundedBadgeIcon],svg[mdi-square-rounded-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 8C21.43 8 23 6.43 23 4.5S21.43 1 19.5 1S16 2.57 16 4.5S17.57 8 19.5 8m0 2q.75 0 1.5-.21V16c0 2.76-2.24 5-5 5H8c-2.76 0-5-2.24-5-5V8c0-2.76 2.24-5 5-5h6.21Q14 3.75 14 4.5c0 3.04 2.46 5.5 5.5 5.5"></svg:path>`,
})
export class MdiSquareRoundedBadgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
