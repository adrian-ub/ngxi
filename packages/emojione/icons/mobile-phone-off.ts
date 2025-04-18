import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMobilePhoneOffIcon],svg[emojione-mobile-phone-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#eda454"></svg:circle><svg:g fill="#fff"><svg:path d="M32 37c-2.8 0-5-2.2-5-5s2.2-5 5-5s5 2.2 5 5s-2.2 5-5 5m0-8.6c-2 0-3.6 1.6-3.6 3.6s1.6 3.6 3.6 3.6s3.6-1.6 3.6-3.6s-1.6-3.6-3.6-3.6m7.5 8.6v-4.3H46v-1.4h-6.5v-2.9H46V27h-8v10zm9 0v-4.3H55v-1.4h-6.5v-2.9H55V27h-8v10z"></svg:path><svg:path d="M42.4 39.8v6.8H21.6v-32h20.8v9.8H45v-9.8c0-2.8-2.3-5-5.2-5H24.2c-2.9 0-5.2 2.2-5.2 5v35c0 2.8 2.3 5 5.2 5h15.6c2.9 0 5.2-2.2 5.2-5v-9.8zM32 52c-.9 0-1.6-.7-1.6-1.5S31.1 49 32 49s1.6.7 1.6 1.5S32.9 52 32 52"></svg:path></svg:g>`,
})
export class EmojioneMobilePhoneOffIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
