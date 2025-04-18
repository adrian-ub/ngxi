import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPintGlassBoldIcon],svg[ph-pint-glass-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M209 24a12 12 0 0 0-9-4H56a12 12 0 0 0-11.91 13.43l23.15 193A20 20 0 0 0 87.1 244h81.8a20 20 0 0 0 19.86-17.62l23.15-192.95A12 12 0 0 0 209 24m-22.53 20l-1.92 16H71.45l-1.92-16Zm-21.12 176h-74.7L74.33 84h107.34Z"></svg:path>`,
})
export class PhPintGlassBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
