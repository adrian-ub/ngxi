import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPrinter3dNozzleOffIcon],svg[mdi-printer-3d-nozzle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.8 22.7L14 15.9L13 17h-2l-3.5-4H5V8h1.1l-5-5l1.3-1.3l19.7 19.7zM11 19c0 .6-.4 1-1 1H2v2h8c1.7 0 3-1.3 3-3v-1h-2zm8-6V8h-2V2H7v1.8l9.2 9.2z"></svg:path>`,
})
export class MdiPrinter3dNozzleOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
