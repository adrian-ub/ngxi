import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMarketingIcon],svg[hugeicons-marketing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:ellipse cx="18" cy="10" rx="4" ry="8"></svg:ellipse><svg:path d="M18 2C14.897 2 8.465 4.378 4.771 5.854C3.079 6.53 2 8.178 2 10s1.08 3.47 2.771 4.146C8.465 15.622 14.897 18 18 18m-7 4l-1.943-1.07A5.93 5.93 0 0 1 6.045 15"></svg:path></svg:g>`,
})
export class HugeiconsMarketingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
