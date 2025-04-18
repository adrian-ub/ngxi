import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineParkIcon],svg[ic-baseline-park-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 12h2L12 2L5.05 12H7l-3.9 6h6.92v4h3.96v-4H21z"></svg:path>`,
})
export class IcBaselineParkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
