import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiLockFilledIcon],svg[weui-lock-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 9V6.5a4.5 4.5 0 0 1 9 0V9H19a1 1 0 0 1 1 .999V21a.997.997 0 0 1-1 1H5a1 1 0 0 1-1-.999V10a.997.997 0 0 1 1-1zM9 9h6V6.5a3 3 0 0 0-6 0zm2.4 6.875V18h1.2v-2.125a1.5 1.5 0 1 0-1.2 0"></svg:path>`,
})
export class WeuiLockFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
