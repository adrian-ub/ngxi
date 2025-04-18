import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhAvengersIcon],svg[whh-avengers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m64-134V768H320l-29 58q100 70 221 70q30 0 64-6M384 640h192V256zM128 512q0 109 58 203l293-585q-148 12-249.5 122T128 512m576-332v664q88-51 140-139t52-193t-52-193t-140-139"></svg:path>`,
})
export class WhhAvengersIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
