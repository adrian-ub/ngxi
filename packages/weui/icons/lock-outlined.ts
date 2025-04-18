import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiLockOutlinedIcon],svg[weui-lock-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 9V6a4 4 0 1 1 8 0v3h3a1 1 0 0 1 1 .999V21a.997.997 0 0 1-1 1H5a1 1 0 0 1-1-.999V10a.997.997 0 0 1 1-1zm1.2 0h5.6V6a2.8 2.8 0 0 0-5.6 0zm-4 1.2v10.6h13.6V10.2zm6.2 5.675a1.5 1.5 0 1 1 1.2 0V18h-1.2z"></svg:path>`,
})
export class WeuiLockOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
