import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSignInSqureDuotoneIcon],svg[lets-icons-sign-in-squre-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M16.633 6.544L10.316 4.44A1 1 0 0 0 9 5.387v13.226a1 1 0 0 0 1.316.948l6.317-2.105A2 2 0 0 0 18 15.559V8.442a2 2 0 0 0-1.367-1.898"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M11.5 9.5L14 12m0 0l-2.5 2.5M14 12H4"></svg:path></svg:g>`,
})
export class LetsIconsSignInSqureDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
