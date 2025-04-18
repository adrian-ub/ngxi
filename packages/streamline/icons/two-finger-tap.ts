import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTwoFingerTapIcon],svg[streamline-two-finger-tap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.263 5.982a3.498 3.498 0 0 1 4.085-4.229a3.498 3.498 0 0 1 6.09 3.041"></svg:path><svg:path d="m7.312 8.258l.616-4.69a1.29 1.29 0 0 1 1.278-1.122v0c.778 0 1.38.685 1.278 1.457l-.572 4.355h.473c1.185 0 2.145.96 2.145 2.144v3.08M7.31 8.266L6.733 4.91A1.31 1.31 0 0 0 5.44 3.82v0c-.793 0-1.405.697-1.302 1.483l.57 4.368l-.648.121a1.715 1.715 0 0 0-1.095 2.659l.298.432l.424.617"></svg:path></svg:g>`,
})
export class StreamlineTwoFingerTapIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
