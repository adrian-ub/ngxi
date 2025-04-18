import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faFacebookIcon],svg[fa-facebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M895 12v264H738q-86 0-116 36t-30 108v189h293l-39 296H592v759H286V905H31V609h255V391q0-186 104-288.5T667 0q147 0 228 12"></svg:path>`,
})
export class FaFacebookIcon {
  readonly viewBox = input("0 0 896 1664")
  readonly width = input("0.54em")
  readonly height = input("1em")
}
