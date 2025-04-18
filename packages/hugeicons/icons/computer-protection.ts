import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComputerProtectionIcon],svg[hugeicons-computer-protection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10.014 2c-3.778 0-5.667 0-6.84 1.172S2 6.229 2 10s0 5.657 1.174 6.828S6.236 18 10.014 18h4.007c3.778 0 5.667 0 6.84-1.172c.81-.808 1.061-1.956 1.139-3.828m-10 5v4m-4 0h8m-5-7h2"></svg:path><svg:path d="M17.5 2c-1.426 0-2.35.909-3.442 1.24c-.444.134-.666.202-.756.297s-.116.233-.169.51c-.563 2.969.668 5.713 3.605 6.78c.315.116.473.173.763.173s.447-.057.763-.172c2.936-1.068 4.166-3.812 3.603-6.78c-.053-.278-.08-.417-.169-.511s-.312-.163-.756-.297C19.849 2.909 18.924 2 17.499 2"></svg:path></svg:g>`,
})
export class HugeiconsComputerProtectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
