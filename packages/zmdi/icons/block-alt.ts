import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiBlockAltIcon],svg[zmdi-block-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3m-.5 384q58 0 105-36L79 111q-36 47-36 105q0 71 50 121t120 50m135-66q36-47 36-105q0-71-50-121T213 45q-58 0-104 36z"></svg:path>`,
})
export class ZmdiBlockAltIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}
