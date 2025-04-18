import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSignalTowerLineIcon],svg[ri-signal-tower-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.116 20.087l1.015-1.739a8 8 0 1 1 9.738 0l1.015 1.739A9.99 9.99 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.99 9.99 0 0 0 4.116 8.087m2.034-3.485a6 6 0 1 1 7.7 0l-1.03-1.766a4 4 0 1 0-5.64 0zM11 13h2v9h-2z"></svg:path>`,
})
export class RiSignalTowerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
