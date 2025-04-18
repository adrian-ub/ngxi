import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonLocationPinOffDuotoneIcon],svg[iconamoon-location-pin-off-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M6.5 16.5L12 22l5-5L6.022 6.022A7.78 7.78 0 0 0 6.5 16.5" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m4 4l16 16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.022 6.022A7.78 7.78 0 0 0 6.5 16.5L12 22l5-5M9.344 3.687a7.78 7.78 0 0 1 9.969 9.969"></svg:path></svg:g>`,
})
export class IconamoonLocationPinOffDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
