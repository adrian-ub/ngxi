import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMobileProtectionIcon],svg[hugeicons-mobile-protection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17.5 13.5V15c0 3.3 0 4.95-1.025 5.974S13.8 22 10.5 22s-4.95 0-5.975-1.025S3.5 18.3 3.5 15V9c0-3.3 0-4.95 1.025-5.975c.857-.856 2.149-.997 4.475-1.02"></svg:path><svg:path d="M16 2c-1.426 0-2.35.909-3.442 1.24c-.444.134-.666.202-.756.297s-.116.233-.169.51c-.563 2.969.668 5.713 3.605 6.78c.315.116.473.173.763.173s.447-.057.763-.172c2.936-1.068 4.166-3.812 3.603-6.78c-.053-.278-.08-.417-.169-.511s-.312-.163-.756-.297C18.349 2.909 17.424 2 15.999 2M9.5 19h2"></svg:path></svg:g>`,
})
export class HugeiconsMobileProtectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
