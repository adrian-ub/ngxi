import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCopyleftLineIcon],svg[ri-copyleft-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10s-4.48 10-10 10m0-2c4.42 0 8-3.58 8-8s-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8m0-3a5 5 0 0 1-4.288-2.428l1.714-1.029A3 3 0 1 0 12 9a3 3 0 0 0-2.573 1.456L7.712 9.428A4.999 4.999 0 0 1 17 12c0 2.76-2.24 5-5 5"></svg:path>`,
})
export class RiCopyleftLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
