import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAlignBoxTopRightFilledIcon],svg[tabler-align-box-top-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005.195v12.666c0 1.96-1.537 3.56-3.472 3.662l-.195.005H5.667a3.667 3.667 0 0 1-3.662-3.472L2 18.333V5.667c0-1.96 1.537-3.56 3.472-3.662L5.667 2zM15 5a1 1 0 0 0-1 1v6l.007.117A1 1 0 0 0 16 12V6l-.007-.117A1 1 0 0 0 15 5m3 0a1 1 0 0 0-1 1v4l.007.117A1 1 0 0 0 19 10V6l-.007-.117A1 1 0 0 0 18 5m-6 0a1 1 0 0 0-1 1v2l.007.117A1 1 0 0 0 13 8V6l-.007-.117A1 1 0 0 0 12 5"></svg:path>`,
})
export class TablerAlignBoxTopRightFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
