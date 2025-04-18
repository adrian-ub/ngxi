import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixLabelIcon],svg[ix-label-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.333 106.667v298.667H128L21.333 256L128 106.667zm-42.667 42.667H149.93L73.75 256l76.203 106.667h276.714zM160 224c17.673 0 32 14.327 32 32s-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32m74.666 53.334H384V320H234.666zm0-85.334H384v42.667H234.666z"></svg:path>`,
})
export class IxLabelIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
