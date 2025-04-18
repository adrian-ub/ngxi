import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSailboatCoastalIcon],svg[carbon-sailboat-coastal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24.78 26l1.19-4.758A1 1 0 0 0 25 20h-5v-3h5a1 1 0 0 0 .908-1.419l-6-13a1 1 0 0 0-1.702-.19l-9.998 13A1 1 0 0 0 9 17h9v3H7a1 1 0 0 0-.97 1.242L7.22 26H2v2h28v-2ZM20 7.553L23.437 15H20ZM11.03 15L18 5.94V15Zm11.69 11H9.28l-1-4h15.44Z"></svg:path>`,
})
export class CarbonSailboatCoastalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
