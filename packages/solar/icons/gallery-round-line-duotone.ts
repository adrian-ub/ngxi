import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarGalleryRoundLineDuotoneIcon],svg[solar-gallery-round-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:circle cx="16" cy="8" r="2" opacity=".5"></svg:circle><svg:path stroke-linecap="round" d="m2 10.154l.98-.141C9.96 9.01 15.925 15.03 14.858 22M22 13.385l-.973-.135c-2.844-.394-5.417 1.022-6.742 3.25" opacity=".5"></svg:path></svg:g>`,
})
export class SolarGalleryRoundLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
