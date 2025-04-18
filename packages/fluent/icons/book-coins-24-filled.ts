import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBookCoins24FilledIcon],svg[fluent-book-coins-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4.5A2.5 2.5 0 0 1 6.5 2H18a2.5 2.5 0 0 1 2.5 2.5v14.25a.75.75 0 0 1-.75.75H5.5a1 1 0 0 0 1 1h13.25a.75.75 0 0 1 0 1.5H6.5A2.5 2.5 0 0 1 4 19.5zm6.197 2.964C9.622 7.739 9 8.24 9 9s.622 1.26 1.197 1.536c.622.297 1.437.464 2.303.464s1.681-.167 2.303-.464C15.378 10.261 16 9.76 16 9s-.621-1.26-1.197-1.536C14.18 7.167 13.366 7 12.5 7s-1.681.167-2.303.464m5.798 3.426C15.17 11.567 13.91 12 12.5 12s-2.67-.433-3.495-1.11A1 1 0 0 0 9 11c0 1.105 1.567 2 3.5 2s3.5-.895 3.5-2q0-.055-.005-.11M12.5 14c-1.41 0-2.67-.433-3.495-1.11A1 1 0 0 0 9 13c0 1.105 1.567 2 3.5 2s3.5-.895 3.5-2a1 1 0 0 0-.005-.11C15.17 13.567 13.91 14 12.5 14"></svg:path>`,
})
export class FluentBookCoins24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
