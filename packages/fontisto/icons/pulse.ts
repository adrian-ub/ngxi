import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoPulseIcon],svg[fontisto-pulse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.606 11.366l2.16-7.008l4.619 10.497l1.022-3.546h11.12a10 10 0 0 0 .423-2.895q0-.63-.075-1.239l.005.049c-.281-2.127-1.432-6.101-6.094-7.014a10.5 10.5 0 0 0-1.948-.208h-.146a7.96 7.96 0 0 0-5.722 2.563l-.005.005A7.97 7.97 0 0 0 8.245.002h-.147Q7.051.02 6.071.222l.07-.012C2.797.934.289 3.754.048 7.2l-.001.024a10.5 10.5 0 0 0 .438 4.216l-.02-.075z"></svg:path><svg:path fill="currentColor" d="m17.647 12.955l-1.935 6.742l-4.674-10.619l-1.209 3.936H1.087C2.576 16.31 6.047 20.446 13.961 24c8.015-3.6 11.49-7.741 12.96-11.04z"></svg:path>`,
})
export class FontistoPulseIcon {
  readonly viewBox = input("0 0 28 24")
  readonly width = input("1.17em")
  readonly height = input("1em")
}
