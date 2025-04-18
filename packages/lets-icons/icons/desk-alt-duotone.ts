import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsDeskAltDuotoneIcon],svg[lets-icons-desk-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="12" height="15" x="6" y="5" fill="currentColor" fill-opacity=".25" rx="2"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" d="M9.5 9.5h5m-5 3h5m-5 3h5"></svg:path><svg:path fill="currentColor" d="M8 4.87c0-.48.39-.87.87-.87h6.26c.48 0 .87.39.87.87a.13.13 0 0 1-.13.13h-.37a.5.5 0 0 0-.5.5v.35a.15.15 0 0 1-.15.15h-5.7A.15.15 0 0 1 9 5.85V5.5a.5.5 0 0 0-.5-.5h-.37A.13.13 0 0 1 8 4.87"></svg:path></svg:g>`,
})
export class LetsIconsDeskAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
