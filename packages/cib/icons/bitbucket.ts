import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibBitbucketIcon],svg[cib-bitbucket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.036 1.615A1.026 1.026 0 0 0 0 2.625q0 .093.016.177l4.349 26.417A1.39 1.39 0 0 0 5.73 30.38H26.6c.51.005.943-.359 1.026-.859l4.359-26.708a1.017 1.017 0 0 0-.844-1.172a1 1 0 0 0-.177-.016zm18.323 19.088h-6.661l-1.802-9.417h10.078z"></svg:path>`,
})
export class CibBitbucketIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
