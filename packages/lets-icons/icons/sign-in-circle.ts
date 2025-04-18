import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSignInCircleIcon],svg[lets-icons-sign-in-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="2" d="M4.929 19.071a10 10 0 1 0 0-14.142"></svg:path><svg:path fill="currentColor" d="m15 12l.78-.625l.5.625l-.5.625zM3 13a1 1 0 1 1 0-2zm8.78-6.625l4 5l-1.56 1.25l-4-5zm4 6.25l-4 5l-1.56-1.25l4-5zM15 13H3v-2h12z"></svg:path></svg:g>`,
})
export class LetsIconsSignInCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
