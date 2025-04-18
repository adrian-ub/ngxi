import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedShimmerEvmIcon],svg[token-branded-shimmer-evm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00E0CA" d="M18.486 5.427c-2.97-3.175-7.852-3.244-10.904-.153s-3.117 8.171-.146 11.347l1.952-1.978c-1.915-2.06-1.87-5.347.106-7.348a4.864 4.864 0 0 1 7.062.088zM5.514 18.573c2.97 3.175 7.852 3.244 10.904.153s3.117-8.171.146-11.347l-1.952 1.978c1.915 2.06 1.87 5.347-.106 7.348s-5.134 1.96-7.062-.088z"></svg:path>`,
})
export class TokenBrandedShimmerEvmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
