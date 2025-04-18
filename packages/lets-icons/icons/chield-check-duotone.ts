import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsChieldCheckDuotoneIcon],svg[lets-icons-chield-check-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="m15.545 4.52l2.849 1.22a1 1 0 0 1 .606.92v6.252a6 6 0 0 1-2.513 4.883l-3.906 2.79a1 1 0 0 1-1.162 0l-3.906-2.79A6 6 0 0 1 5 12.912V6.66a1 1 0 0 1 .606-.919l2.849-1.22a9 9 0 0 1 7.09 0"></svg:path><svg:path stroke="currentColor" d="m9.5 12.5l1.894 1.894a.15.15 0 0 0 .212 0L15.5 10.5"></svg:path></svg:g>`,
})
export class LetsIconsChieldCheckDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
