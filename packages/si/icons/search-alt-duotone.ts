import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siSearchAltDuotoneIcon],svg[si-search-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M9 15A6 6 0 1 0 9 3a6 6 0 0 0 0 12"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m21 21l-7.5-7.5M15 9A6 6 0 1 1 3 9a6 6 0 0 1 12 0"></svg:path></svg:g>`,
})
export class SiSearchAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
