import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonUsbIcon],svg[carbon-usb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 15V6a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v9a2 2 0 0 0-2 2v11h2V17h16v11h2V17a2 2 0 0 0-2-2M10 6h12v9H10Z"></svg:path><svg:path fill="currentColor" d="M12 10h3v2h-3zm5 0h3v2h-3z"></svg:path>`,
})
export class CarbonUsbIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
