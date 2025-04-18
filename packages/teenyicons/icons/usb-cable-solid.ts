import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsUsbCableSolidIcon],svg[teenyicons-usb-cable-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 0H4v6h7zM6 4V2h1v2zm2 0V2h1v2z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12 7H3v3.5A1.5 1.5 0 0 0 4.5 12H5v2h1v1h1v-1h1v1h1v-1h1v-2h.5a1.5 1.5 0 0 0 1.5-1.5z"></svg:path>`,
})
export class TeenyiconsUsbCableSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
