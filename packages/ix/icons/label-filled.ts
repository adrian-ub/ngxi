import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixLabelFilledIcon],svg[ix-label-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.333 106.667v298.667H128L21.333 256L128 106.667zM384 277.334H234.666V320H384zM138.666 224c-17.673 0-32 14.327-32 32s14.327 32 32 32s32-14.327 32-32s-14.327-32-32-32M384 192H234.666v42.667H384z"></svg:path>`,
})
export class IxLabelFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
