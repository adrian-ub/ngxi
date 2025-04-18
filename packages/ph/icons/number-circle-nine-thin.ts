import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleNineThinIcon],svg[ph-number-circle-nine-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 80.29a32 32 0 1 0-6.23 58.16L116.57 174a4 4 0 0 0 1.38 5.48a3.9 3.9 0 0 0 2 .57a4 4 0 0 0 3.43-1.95l32.33-54.1A32 32 0 0 0 144 80.29m4.8 39.71l-.06.09a22.62 22.62 0 1 1 .06-.09M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92"></svg:path>`,
})
export class PhNumberCircleNineThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
