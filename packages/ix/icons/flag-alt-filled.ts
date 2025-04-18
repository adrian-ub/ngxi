import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixFlagAltFilledIcon],svg[ix-flag-alt-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 42.664v42.667l298.667 128L128 362.664v106.667H85.333V42.664z"></svg:path>`,
})
export class IxFlagAltFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
