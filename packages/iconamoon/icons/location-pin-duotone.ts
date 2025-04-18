import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonLocationPinDuotoneIcon],svg[iconamoon-location-pin-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 16.5L12 22l-5.5-5.5a7.778 7.778 0 1 1 11 0M12 12a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="3" d="M12 11h.01v.01H12z"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="m12 22l5.5-5.5a7.778 7.778 0 1 0-11 0z"></svg:path></svg:g>`,
})
export class IconamoonLocationPinDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
