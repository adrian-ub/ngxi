import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPailOffOutlineIcon],svg[mdi-pail-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.84 22.73l-3.49-3.49L17 21H7l-1.1-5.5l1.83-1.07l.91 4.57h6.72l.29-1.46l-6.34-6.34l-5.04 2.91a.998.998 0 1 1-1-1.73l4.58-2.64l-1.47-1.47l-1.73 1L4 6H3V4.89L1.11 3l1.28-1.27l19.72 19.73zM17.96 6l-1.46 7.3l1.7 1.7L20 6h1V4H7.2l2 2zM11.5 7.63l-.42.25l1.45 1.45c.44-.28.6-.87.33-1.33a.976.976 0 0 0-1.36-.37"></svg:path>`,
})
export class MdiPailOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
