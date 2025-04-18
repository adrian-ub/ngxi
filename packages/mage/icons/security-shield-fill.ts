import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageSecurityShieldFillIcon],svg[mage-security-shield-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.872 5.05a2.82 2.82 0 0 0-1.402-1.026l-4.801-1.6a8.68 8.68 0 0 0-5.357 0l-4.8 1.6A2.82 2.82 0 0 0 3.117 5.05a2.82 2.82 0 0 0-.536 1.657v5.158a8.47 8.47 0 0 0 3.972 7.22l3.954 2.486a2.82 2.82 0 0 0 2.993 0l3.954-2.485a8.47 8.47 0 0 0 3.963-7.174V6.754a2.82 2.82 0 0 0-.546-1.704m-7.935 7.286v2.269a.941.941 0 0 1-1.883 0v-2.269a2.984 2.984 0 1 1 1.883 0"></svg:path><svg:path fill="currentColor" d="M13.101 9.502a1.101 1.101 0 1 1-2.202 0a1.101 1.101 0 0 1 2.202 0"></svg:path>`,
})
export class MageSecurityShieldFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
