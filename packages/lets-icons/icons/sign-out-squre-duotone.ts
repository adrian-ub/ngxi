import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSignOutSqureDuotoneIcon],svg[lets-icons-sign-out-squre-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="m10.368 6.544l6.316-2.105A1 1 0 0 1 18 5.387v13.226a1 1 0 0 1-1.316.948l-6.317-2.105A2 2 0 0 1 9 15.559V8.442a2 2 0 0 1 1.367-1.898"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M6.5 9.5L4 12m0 0l2.5 2.5M4 12h10"></svg:path></svg:g>`,
})
export class LetsIconsSignOutSqureDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
