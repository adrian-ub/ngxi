import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSunglassesDuotoneIcon],svg[ph-sunglasses-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M32 136h72v28a36 36 0 0 1-72 0Zm120 0v28a36 36 0 0 0 72 0v-28Z" opacity=".2"></svg:path><svg:path d="M200 40a8 8 0 0 0 0 16a16 16 0 0 1 16 16v56H40V72a16 16 0 0 1 16-16a8 8 0 0 0 0-16a32 32 0 0 0-32 32v92a44 44 0 0 0 88 0v-20h32v20a44 44 0 0 0 88 0V72a32 32 0 0 0-32-32m12.63 137.31L179.31 144H216v20a27.8 27.8 0 0 1-3.37 13.31M40 164v-16.69l41.31 41.32A28 28 0 0 1 40 164m56 0a27.8 27.8 0 0 1-3.37 13.31L59.31 144H96Zm64 0v-16.69l41.31 41.32A28 28 0 0 1 160 164"></svg:path></svg:g>`,
})
export class PhSunglassesDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
