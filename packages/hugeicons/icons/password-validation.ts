import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPasswordValidationIcon],svg[hugeicons-password-validation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13.408 16.668s.625 0 1.25 1.334c0 0 1.986-3.334 3.75-4m-1.465-7.001h.01m-5.01 0h.01m-5.01 0h.01m.939 4.968H5.008a3.004 3.004 0 0 1-3.008-3v-3.97c0-1.657 1.347-3 3.008-3h13.984a3.004 3.004 0 0 1 3.008 3v4.13"></svg:path><svg:path d="M22 16.002c0-3.314-2.694-6-6.017-6s-6.017 2.686-6.017 6s2.694 6 6.017 6s6.017-2.687 6.017-6"></svg:path></svg:g>`,
})
export class HugeiconsPasswordValidationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
