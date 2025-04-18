import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiCellphoneFilledIcon],svg[weui-cellphone-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zm7 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class WeuiCellphoneFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
