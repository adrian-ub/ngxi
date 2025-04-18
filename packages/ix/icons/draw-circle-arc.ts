import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixDrawCircleArcIcon],svg[ix-draw-circle-arc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 469.333c-117.821 0-213.333-95.513-213.333-213.334c0-117.82 95.512-213.333 213.333-213.333v42.667c-94.257 0-170.667 76.41-170.667 170.666c0 94.257 76.41 170.667 170.667 170.667s170.667-76.41 170.667-170.667h42.666c0 117.821-95.512 213.334-213.333 213.334"></svg:path>`,
})
export class IxDrawCircleArcIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
