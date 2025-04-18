import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignWatchFilledIcon],svg[tdesign-watch-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.117 0h9.766l.503 4.025A3 3 0 0 1 20 7v2h1v6h-1v2a3 3 0 0 1-2.614 2.975L16.883 24H7.117l-.503-4.025A3 3 0 0 1 4 17V7a3 3 0 0 1 2.614-2.975zM7 18h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1"></svg:path>`,
})
export class TdesignWatchFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
