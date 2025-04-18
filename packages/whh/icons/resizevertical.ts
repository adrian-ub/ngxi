import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhResizeverticalIcon],svg[whh-resizevertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M298 1015L9 736q-9-9-9-21.5T9 693l46-44q9-9 22.5-9t22.5 9l156 151V224L100 375q-9 9-22.5 9T55 375L9 331q-9-9-9-21.5T9 288L298 9q9-9 22.5-9T343 9l289 279q9 9 9 21.5t-9 21.5l-46 44q-9 9-22.5 9t-22.5-9L384 223v578l157-152q9-9 22.5-9t22.5 9l46 44q9 9 9 21.5t-9 21.5l-289 279q-9 9-22.5 9t-22.5-9"></svg:path>`,
})
export class WhhResizeverticalIcon {
  readonly viewBox = input("0 0 641 1024")
  readonly width = input("0.63em")
  readonly height = input("1em")
}
