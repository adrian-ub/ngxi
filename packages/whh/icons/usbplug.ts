import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhUsbplugIcon],svg[whh-usbplug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 896h-64v64q0 26-19 45t-45 19H320q-26 0-45-19t-19-45v-64h-64q-17 0-64-40.5T40.5 768T0 704V384q0-26 18.5-45T64 320h640q26 0 45 19t19 45v320q0 17-40.5 64T640 855.5T576 896M64 0h640v256H64zm448 160q0 13 9.5 22.5T544 192h64q13 0 22.5-9.5T640 160V96q0-13-9.5-22.5T608 64h-64q-13 0-22.5 9.5T512 96zm-384 0q0 13 9.5 22.5T160 192h64q13 0 22.5-9.5T256 160V96q0-13-9.5-22.5T224 64h-64q-13 0-22.5 9.5T128 96z"></svg:path>`,
})
export class WhhUsbplugIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
