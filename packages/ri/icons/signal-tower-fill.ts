import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSignalTowerFillIcon],svg[ri-signal-tower-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.116 20.087A9.99 9.99 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a9.99 9.99 0 0 1-4.116 8.087l-1.015-1.739a8 8 0 1 0-9.738 0zm2.034-3.485a6 6 0 1 1 7.7 0l-1.03-1.766a4 4 0 1 0-5.64 0zM11 13h2l1 9h-4z"></svg:path>`,
})
export class RiSignalTowerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
