import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphTabletIcon],svg[si-glyph-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.995.043h-8.99A2.005 2.005 0 0 0 2 2.047v11.95C2 15.102 2.899 16 4.005 16h8.99A2.005 2.005 0 0 0 15 13.997V2.047A2.005 2.005 0 0 0 12.995.043m-2.912 14.999H6.93v-1.114h3.153zM13 13H4V1.97h9z"></svg:path>`,
})
export class SiGlyphTabletIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
