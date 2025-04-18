import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSignInCircleDuotoneIcon],svg[lets-icons-sign-in-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="7" cy="7" r="7" fill="currentColor" fill-opacity=".25" transform="matrix(0 -1 -1 0 20 19)"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" d="M11.5 9.5L14 12m0 0l-2.5 2.5M14 12H4"></svg:path></svg:g>`,
})
export class LetsIconsSignInCircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
