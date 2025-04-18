import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSignInSqureDuotoneLineIcon],svg[lets-icons-sign-in-squre-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsSignInSqureDuotoneLine0"><svg:g fill="none"><svg:path stroke="#fff" stroke-linecap="round" d="M11.5 9.5L14 12m0 0l-2.5 2.5M14 12H4"></svg:path><svg:path stroke="silver" stroke-linejoin="round" stroke-opacity=".25" d="M8.5 9V4.72a1 1 0 0 1 1.196-.98l8 1.6a1 1 0 0 1 .804.98v11.36a1 1 0 0 1-.804.98l-8 1.6a1 1 0 0 1-1.196-.98V15"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsSignInSqureDuotoneLine0)"></svg:path>`,
})
export class LetsIconsSignInSqureDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
