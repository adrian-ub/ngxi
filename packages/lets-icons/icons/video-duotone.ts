import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsVideoDuotoneIcon],svg[lets-icons-video-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18M9.737 7.868l6.474 3.238a1 1 0 0 1 0 1.789l-6.474 3.237A1.2 1.2 0 0 1 8 15.058V8.943a1.2 1.2 0 0 1 1.737-1.074" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.211 11.106L9.737 7.868A1.2 1.2 0 0 0 8 8.942v6.116a1.2 1.2 0 0 0 1.737 1.074l6.474-3.238a1 1 0 0 0 0-1.788"></svg:path><svg:circle cx="12" cy="12" r="9" stroke="currentColor"></svg:circle></svg:g>`,
})
export class LetsIconsVideoDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
