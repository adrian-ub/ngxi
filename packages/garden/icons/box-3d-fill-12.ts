import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenBox3dFill12Icon],svg[garden-box-3d-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.56 2.69L6.4.46a.87.87 0 0 0-.8 0L1.44 2.69c-.27.15-.44.44-.44.75v5.12c0 .31.17.6.45.75l4.15 2.24c.13.07.27.1.4.1c.14 0 .28-.03.4-.1l4.16-2.24c.27-.15.44-.44.44-.75V3.44c0-.31-.17-.6-.44-.75m-.57 1.52L6.5 6.09v4.41c0 .28-.22.5-.5.5s-.5-.22-.5-.5V6.09L1.99 4.2a.623.623 0 0 1 .59-1.1L6 4.94l3.4-1.83c.3-.17.68-.05.85.25c.16.31.05.69-.26.85"></svg:path>`,
})
export class GardenBox3dFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
