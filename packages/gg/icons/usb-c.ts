import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggUsbCIcon],svg[gg-usb-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z"></svg:path><svg:path fill-rule="evenodd" d="M3 12a5 5 0 0 1 5-5h8a5 5 0 0 1 0 10H8a5 5 0 0 1-5-5m5-3h8a3 3 0 1 1 0 6H8a3 3 0 1 1 0-6" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgUsbCIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
