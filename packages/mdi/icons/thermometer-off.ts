import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiThermometerOffIcon],svg[mdi-thermometer-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 7.8l-2-2V5c0-1.66 1.34-3 3-3s3 1.34 3 3v6.8L11.2 8H13V5c0-.55-.45-1-1-1s-1 .45-1 1zm11.11 13.66L2.39 1.73L1.11 3L9 10.89V13a4.997 4.997 0 0 0-1 7a4.997 4.997 0 0 0 7 1c.84-.63 1.4-1.5 1.71-2.4l4.13 4.13z"></svg:path>`,
})
export class MdiThermometerOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
