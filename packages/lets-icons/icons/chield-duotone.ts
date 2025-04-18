import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsChieldDuotoneIcon],svg[lets-icons-chield-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.487 17.795l-3.906 2.79a1 1 0 0 1-1.162 0l-3.906-2.79A6 6 0 0 1 5 12.912V9.15A.15.15 0 0 1 5.15 9h13.7a.15.15 0 0 1 .15.15v3.762a6 6 0 0 1-2.513 4.883"></svg:path><svg:path fill="currentColor" fill-opacity=".25" d="m15.545 4.52l2.849 1.22a1 1 0 0 1 .606.92v1.19a.15.15 0 0 1-.15.15H5.15A.15.15 0 0 1 5 7.85V6.66a1 1 0 0 1 .606-.92l2.849-1.22a9 9 0 0 1 7.09 0"></svg:path>`,
})
export class LetsIconsChieldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
