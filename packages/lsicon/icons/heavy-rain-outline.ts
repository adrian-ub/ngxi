import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconHeavyRainOutlineIcon],svg[lsicon-heavy-rain-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M5 12.5H4c-1 0-2.5-.5-2.5-2c0-2.131 1.454-2.81 2.502-2.963A.606.606 0 0 0 4.521 7C4.708 4.801 6.137 3.5 8 3.5s3.292 1.301 3.48 3.5a.58.58 0 0 0 .52.522c2.068.19 2.5 1.584 2.5 2.978c0 1.5-1.5 2-2.5 2h-1m-4.612-1.449l-.776 2.898m2.776-2.898l-.776 2.898m2.776-2.898l-.776 2.898"></svg:path>`,
})
export class LsiconHeavyRainOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
