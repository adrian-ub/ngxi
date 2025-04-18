import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCircleIcon],svg[ix-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c117.821 0 213.334 95.513 213.334 213.333c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667m0 42.667c-94.256 0-170.666 76.41-170.666 170.666c0 94.257 76.41 170.667 170.666 170.667c94.257 0 170.667-76.41 170.667-170.667c0-94.256-76.41-170.666-170.667-170.666"></svg:path>`,
})
export class IxCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
