import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSearchAltDuotoneLineIcon],svg[lets-icons-search-alt-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.2"><svg:circle cx="11" cy="11" r="6" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path stroke-linecap="round" d="M11 8a3 3 0 0 0-3 3m12 9l-3-3"></svg:path></svg:g>`,
})
export class LetsIconsSearchAltDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
