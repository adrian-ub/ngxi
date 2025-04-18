import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixDrawCircleIcon],svg[ix-draw-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 42.666c117.821 0 213.333 95.513 213.333 213.333c0 117.821-95.512 213.334-213.333 213.334S42.667 373.82 42.667 255.999c0-117.82 95.512-213.333 213.333-213.333m0 42.667c-94.257 0-170.667 76.41-170.667 170.666c0 94.257 76.41 170.667 170.667 170.667s170.667-76.41 170.667-170.667c0-94.256-76.41-170.666-170.667-170.666"></svg:path>`,
})
export class IxDrawCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
