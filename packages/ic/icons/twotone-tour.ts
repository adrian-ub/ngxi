import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneTourIcon],svg[ic-twotone-tour-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 12V6h11.05l-1.2 3l1.2 3z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M21 4H7V2H5v20h2v-8h14l-2-5zM7 12V6h11.05l-1.2 3l1.2 3zm7-3c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2"></svg:path>`,
})
export class IcTwotoneTourIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
