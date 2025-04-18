import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoDribbbleIcon],svg[tdesign-logo-dribbble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.908 3.982a9.02 9.02 0 0 0-4.679 5.99a26.9 26.9 0 0 0 7.882-1.548a34 34 0 0 0-3.203-4.442M3 11.983V12a8.96 8.96 0 0 0 2.005 5.664a16.04 16.04 0 0 1 7.909-5.838q-.381-.831-.806-1.637A28.9 28.9 0 0 1 3 11.983m3.45 7.103A8.96 8.96 0 0 0 12 21a9 9 0 0 0 3.522-.715a33.7 33.7 0 0 0-1.825-6.611a14.04 14.04 0 0 0-7.247 5.412m9.206-5.89a36 36 0 0 1 1.708 6.032a9 9 0 0 0 3.543-5.926a14.1 14.1 0 0 0-5.25-.107m5.315-1.92a8.95 8.95 0 0 0-1.893-4.836a29 29 0 0 1-5.113 2.984q.48.925.909 1.881a16.2 16.2 0 0 1 6.096-.028m-7.98-3.606A27 27 0 0 0 17.656 5A8.96 8.96 0 0 0 12 3c-.724 0-1.428.085-2.101.246A36 36 0 0 1 12.99 7.67M1.053 10.9a11.01 11.01 0 0 1 6.733-9.065A11 11 0 0 1 12 1c3.121 0 5.94 1.301 7.942 3.389a10.97 10.97 0 0 1 3.043 8.199a11 11 0 0 1-5.895 9.166A10.96 10.96 0 0 1 12 23c-2.921 0-5.578-1.14-7.547-2.997A10.97 10.97 0 0 1 1.054 10.9"></svg:path>`,
})
export class TdesignLogoDribbbleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
