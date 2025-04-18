import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[brandicoFacebookIcon],svg[brandico-facebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124.074 1000V530.771H0V361.826h124.074V217.525C124.074 104.132 197.365 0 366.243 0C434.619 0 485.18 6.555 485.18 6.555l-3.984 157.766s-51.564-.502-107.833-.502c-60.9 0-70.657 28.065-70.657 74.646v123.361h183.331l-7.977 168.945H302.706V1000z"></svg:path>`,
})
export class BrandicoFacebookIcon {
  readonly viewBox = input("0 0 486.037 1000")
  readonly width = input("0.49em")
  readonly height = input("1em")
}
