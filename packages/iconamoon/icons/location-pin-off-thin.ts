import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonLocationPinOffThinIcon],svg[iconamoon-location-pin-off-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path d="m4 4l16 16"></svg:path><svg:path stroke-linejoin="round" d="M6.022 6.022A7.78 7.78 0 0 0 6.5 16.5L12 22l5-5M9.344 3.687a7.78 7.78 0 0 1 9.969 9.969"></svg:path></svg:g>`,
})
export class IconamoonLocationPinOffThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
