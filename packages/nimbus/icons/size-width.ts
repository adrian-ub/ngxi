import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nimbusSizeWidthIcon],svg[nimbus-size-width-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.46 7l-4-2.74l-.71 1l3.09 2.11H2.16l3.09-2.1l-.71-1L.54 7a1.25 1.25 0 0 0 0 2l4 2.74l.71-1l-3.09-2.12h11.68l-3.09 2.11l.71 1l4-2.74a1.25 1.25 0 0 0 0-1.99"></svg:path>`,
})
export class NimbusSizeWidthIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
