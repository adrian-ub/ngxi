import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedRvcIcon],svg[token-branded-rvc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#A6FFA9" d="M15.16 5.354L9.813 7.07l5.934.784z"></svg:path><svg:path fill="#27A986" d="m9.716 6.923l.686-1.276l2.942-1.176z"></svg:path><svg:path fill="#054034" d="m10.401 5.55l.344-.981l2.403-.098z"></svg:path><svg:path fill="#27A986" d="m14.375 4.814l.343-.932l.392 1.275z"></svg:path><svg:path fill="#A6FFA9" d="m14.325 4.815l.343-.932l-1.716-.736z"></svg:path><svg:path fill="#27A986" d="m12.707 3.05l-1.178.539l2.698 1.176zM14.03 3h-1.275l1.962.785z"></svg:path><svg:path fill="#A6FFA9" d="M14.816 3.931v-.147l2.622.736c.048.014.047.082-.001.095l-2.23.591z"></svg:path><svg:path fill="#27A986" d="m10.746 4.472l.784-.785l1.668.736z"></svg:path><svg:path fill="#054034" d="M13.442 4.52L9.764 6.973l5.346-1.716z"></svg:path><svg:path fill="#27A986" d="M15.747 7.954L9.666 7.12l4.708 10.495z"></svg:path><svg:path fill="#054034" d="m14.472 17.42l1.373-9.368l.882 1.08zm-.196.196L9.616 7.22l1.717 10.299zm-2.992-.049l-1.717-10.3L6.527 21z"></svg:path></svg:g>`,
})
export class TokenBrandedRvcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
