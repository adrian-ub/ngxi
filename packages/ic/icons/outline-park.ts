import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineParkIcon],svg[ic-outline-park-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 12h2L12 2L5.05 12H7l-3.9 6h6.92v4h3.95v-4H21zM6.79 16l3.9-6H8.88l3.13-4.5l3.15 4.5h-1.9l4 6z"></svg:path>`,
})
export class IcOutlineParkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
