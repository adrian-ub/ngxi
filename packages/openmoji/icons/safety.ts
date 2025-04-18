import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSafetyIcon],svg[openmoji-safety-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D0CFCE" d="M35.67 60.98C10.08 54.96 11 16.06 11 16.06c4.75.05 25-5.08 25-5.08v.09s20.25 5.12 25 5.08c0 0 .25 38.81-25.33 44.83"></svg:path><svg:path fill="#9B9B9A" d="M46.556 13.587S53 44 36 60c0 0 16-1 22-25s0-19 0-19z"></svg:path><svg:path fill="#61B2E4" d="m26.644 32.829l9.165 14.011l14.704-24.264l-5.103 2.491l-9.569 15.791l-5.965-9.118z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M36 10.98s-20.254 5.128-25 5.085c0 0-.917 38.893 24.667 44.914m0 .001C61.25 54.957 61 16.15 61 16.15c-4.746.044-25-5.085-25-5.085"></svg:path><svg:path d="m26.644 32.829l9.165 14.011l14.704-24.264l-5.103 2.491l-9.569 15.791l-5.965-9.118z"></svg:path></svg:g>`,
})
export class OpenmojiSafetyIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
