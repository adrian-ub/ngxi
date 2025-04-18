import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsFormPinIcon],svg[grommet-icons-form-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="m4 19l4.455-4.454M12.273 5L18 10.727m-4.454-4.454L9.727 10.09s-2.545-.636-4.454 1.273l6.363 6.363c1.91-1.909 1.273-4.454 1.273-4.454l3.818-3.818l-3.181-3.182Z"></svg:path>`,
})
export class GrommetIconsFormPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
