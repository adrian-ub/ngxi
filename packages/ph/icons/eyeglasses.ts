import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phEyeglassesIcon],svg[ph-eyeglasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 40a8 8 0 0 0 0 16a16 16 0 0 1 16 16v58.08A44 44 0 0 0 145.68 152h-35.36A44 44 0 0 0 40 130.08V72a16 16 0 0 1 16-16a8 8 0 0 0 0-16a32 32 0 0 0-32 32v92a44 44 0 0 0 87.81 4h32.38a44 44 0 0 0 87.81-4V72a32 32 0 0 0-32-32M68 192a28 28 0 1 1 28-28a28 28 0 0 1-28 28m120 0a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path>`,
})
export class PhEyeglassesIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
