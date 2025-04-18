import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCirclerIcon],svg[whh-circler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m192-640q0-53-37.5-90.5T576 256H352q-13 0-22.5 9.5T320 288v448q0 13 9.5 22.5T352 768t22.5-9.5T384 736V576h192q27 0 45.5 19t18.5 45v96q0 13 9.5 22.5T672 768t22.5-9.5T704 736v-96q0-58-43-96q43-38 43-96zM576 512H384V320h192q27 0 45.5 19t18.5 45v64q0 27-18.5 45.5T576 512"></svg:path>`,
})
export class WhhCirclerIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
