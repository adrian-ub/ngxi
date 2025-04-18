import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSignInCircleDuotoneLineIcon],svg[lets-icons-sign-in-circle-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsSignInCircleDuotoneLine0"><svg:g fill="none"><svg:circle cx="8" cy="8" r="8" fill="#fff" fill-opacity=".25" transform="matrix(0 -1 -1 0 22 20)"></svg:circle><svg:path stroke="silver" stroke-opacity=".25" stroke-width=".6" d="M5.7 12a8.3 8.3 0 1 1 16.6 0a8.3 8.3 0 0 1-16.6 0Z"></svg:path><svg:path stroke="#fff" stroke-width="1.2" d="M4.929 19.071a10 10 0 1 0 0-14.142"></svg:path><svg:path fill="#fff" d="m15 12l.469-.375l.3.375l-.3.375zm-12 .6a.6.6 0 1 1 0-1.2zm8.469-5.975l4 5l-.937.75l-4-5zm4 5.75l-4 5l-.937-.75l4-5zM15 12.6H3v-1.2h12z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsSignInCircleDuotoneLine0)"></svg:path>`,
})
export class LetsIconsSignInCircleDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
