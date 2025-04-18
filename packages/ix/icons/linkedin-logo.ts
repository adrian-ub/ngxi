import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixLinkedinLogoIcon],svg[ix-linkedin-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M75.093 42.667H437.76a31.15 31.15 0 0 1 31.573 30.72v365.226a31.145 31.145 0 0 1-32.426 30.72H74.24a31.15 31.15 0 0 1-31.573-30.72V73.387a31.147 31.147 0 0 1 32.426-30.72m31.574 362.666h62.506l1.494-202.666h-64zM137.6 174.72c-20.265 0-36.693-16.428-36.693-36.693c0-20.266 16.428-36.694 36.693-36.694s36.693 16.428 36.693 36.694c0 20.265-16.428 36.693-36.693 36.693m203.733 230.613h64l-2.346-110.72c0-54.4-11.947-97.066-75.947-97.066a66.13 66.13 0 0 0-59.733 32.853v-27.733h-60.8v202.666h64v-99.84c0-26.453 5.12-52.266 37.973-52.266s32.853 30.293 32.853 53.973z" clip-rule="evenodd"></svg:path>`,
})
export class IxLinkedinLogoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
