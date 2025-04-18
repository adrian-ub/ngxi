import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnSocialFacebookIcon],svg[typcn-social-facebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 10h3v3h-3v7h-3v-7H7v-3h3V8.745c0-1.189.374-2.691 1.118-3.512Q12.234 3.999 13.904 4H16v3h-2.1c-.498 0-.9.402-.9.899z"></svg:path>`,
})
export class TypcnSocialFacebookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
