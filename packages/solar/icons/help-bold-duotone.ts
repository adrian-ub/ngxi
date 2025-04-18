import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarHelpBoldDuotoneIcon],svg[solar-help-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m0-6a4 4 0 1 0 0-8a4 4 0 0 0 0 8" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="m5.479 19.582l4.272-4.273a4 4 0 0 1-1.06-1.06L4.418 18.52q.491.57 1.06 1.06m-1.06-14.1l4.273 4.272a4 4 0 0 1 1.06-1.06L5.48 4.417q-.57.492-1.061 1.061m9.829 3.213L18.52 4.42q.57.49 1.06 1.06l-4.27 4.272a4 4 0 0 0-1.061-1.06m5.332 9.829l-4.273-4.273a4 4 0 0 1-1.06 1.06l4.272 4.274q.571-.491 1.061-1.061"></svg:path>`,
})
export class SolarHelpBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
