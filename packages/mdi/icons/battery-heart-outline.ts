import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBatteryHeartOutlineIcon],svg[mdi-battery-heart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 16.2l-.6-.5c-2-1.9-3.4-3.2-3.4-4.7c0-1.2 1-2.2 2.2-2.2c.7 0 1.3.3 1.8.8c.5-.5 1.1-.8 1.8-.8c1.2 0 2.2 1 2.2 2.2c0 1.5-1.4 2.7-3.4 4.6zM12.7 4H11V2H5v2H3.3C2.6 4 2 4.6 2 5.3v15.3c0 .8.6 1.4 1.3 1.4h9.3c.7 0 1.3-.6 1.3-1.3V5.3c.1-.7-.5-1.3-1.2-1.3M12 20H4V6h8z"></svg:path>`,
})
export class MdiBatteryHeartOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
