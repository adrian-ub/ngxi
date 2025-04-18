import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBinaryDuotoneIcon],svg[ph-binary-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M94 24c-22.37 0-38 19.74-38 48s15.63 48 38 48s38-19.74 38-48s-15.63-48-38-48m0 80c-17.37 0-22-20.11-22-32s4.63-32 22-32s22 20.11 22 32s-4.63 32-22 32m72 32c-22.37 0-38 19.74-38 48s15.63 48 38 48s38-19.74 38-48s-15.63-48-38-48m0 80c-17.37 0-22-20.11-22-32s4.63-32 22-32s22 20.11 22 32s-4.63 32-22 32M145 49.22a8 8 0 0 1 3.11-10.88l24-13.33A8 8 0 0 1 184 32v80a8 8 0 0 1-16 0V45.6l-12.12 6.73A8 8 0 0 1 145 49.22M104 144v80a8 8 0 0 1-16 0v-66.4l-12.12 6.73a8 8 0 0 1-7.76-14l24-13.33a8 8 0 0 1 11.88 7"></svg:path></svg:g>`,
})
export class PhBinaryDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
