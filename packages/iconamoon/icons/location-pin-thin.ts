import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonLocationPinThinIcon],svg[iconamoon-location-pin-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path stroke-width="1.5" d="M12 11h.01v.01H12z"></svg:path><svg:path d="m12 22l5.5-5.5a7.778 7.778 0 1 0-11 0z"></svg:path></svg:g>`,
})
export class IconamoonLocationPinThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
