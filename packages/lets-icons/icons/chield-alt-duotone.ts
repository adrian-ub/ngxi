import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsChieldAltDuotoneIcon],svg[lets-icons-chield-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".25" d="m15.545 4.52l2.849 1.22a1 1 0 0 1 .606.92v6.252a6 6 0 0 1-2.513 4.883l-3.906 2.79a1 1 0 0 1-1.162 0l-3.906-2.79A6 6 0 0 1 5 12.912V6.66a1 1 0 0 1 .606-.919l2.849-1.22a9 9 0 0 1 7.09 0"></svg:path><svg:circle cx="12" cy="10.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="9.5" cy="10.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="14.5" cy="10.5" r=".5" fill="currentColor"></svg:circle>`,
})
export class LetsIconsChieldAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
