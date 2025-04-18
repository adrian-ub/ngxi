import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarServerPathLineDuotoneIcon],svg[solar-server-path-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 19h-8M2 19h8m2-2v-3" opacity=".5"></svg:path><svg:circle cx="12" cy="19" r="2" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-width="1.5" d="M2 11a3 3 0 0 1 3-3h14a3 3 0 1 1 0 6H5a3 3 0 0 1-3-3Zm0-6a3 3 0 0 1 3-3h14a3 3 0 1 1 0 6H5a3 3 0 0 1-3-3Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M13 5h6m-6 6h6" opacity=".5"></svg:path><svg:circle cx="6" cy="5" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="6" cy="11" r="1" fill="currentColor" opacity=".5"></svg:circle></svg:g>`,
})
export class SolarServerPathLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
