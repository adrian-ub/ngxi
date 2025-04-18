import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiPadOutlinedIcon],svg[weui-pad-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.2 3.2v17.6h13.6V3.2zM4 3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm8 17a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class WeuiPadOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
