import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineStreetviewIcon],svg[ic-outline-streetview-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.56 14.33c-.34.27-.56.7-.56 1.17V21h7c1.1 0 2-.9 2-2v-5.98c-.94-.33-1.95-.52-3-.52c-2.03 0-3.93.7-5.44 1.83"></svg:path><svg:circle cx="18" cy="6" r="5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M11.5 6c0-1.08.27-2.1.74-3H5c-1.1 0-2 .9-2 2v14c0 .55.23 1.05.59 1.41l9.82-9.82A6.44 6.44 0 0 1 11.5 6"></svg:path>`,
})
export class IcOutlineStreetviewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
