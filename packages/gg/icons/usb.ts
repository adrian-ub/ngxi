import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggUsbIcon],svg[gg-usb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 4.5h1v2h-1zm4 0h-1v2h1z"></svg:path><svg:path fill-rule="evenodd" d="M7 8.5v-7h10v7h2v11a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-11zm2-5h6v5H9zm8 7H7v9a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgUsbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
