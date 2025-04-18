import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPearlOfTheOrientIcon],svg[tdesign-pearl-of-the-orient-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.997.999L13 3.17a3.001 3.001 0 0 1 0 5.66v4.296a4.002 4.002 0 0 1 1.86 6.67L16.754 23h-2.325l-1.28-2.168a4 4 0 0 1-2.298 0L9.573 23H7.249l1.89-3.204A3.9 3.9 0 0 1 8 17a4 4 0 0 1 3-3.874V8.829a3.001 3.001 0 0 1 0-5.658L10.997 1zm-.997 4a1 1 0 1 0 0 2a1 1 0 0 0 0-2m0 10a2 2 0 0 0-2 2c0 .518.165.945.502 1.327q.2.225.457.382c.303.185.658.292 1.04.292a1.99 1.99 0 0 0 1.526-.706A2 2 0 0 0 12 15"></svg:path>`,
})
export class TdesignPearlOfTheOrientIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
