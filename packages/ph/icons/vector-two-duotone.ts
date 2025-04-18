import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phVectorTwoDuotoneIcon],svg[ph-vector-two-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v136H80V40h128a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="m229.66 197.66l-32 32a8 8 0 0 1-11.32-11.32L204.69 200H80a8 8 0 0 1-8-8V59.31L53.66 77.66a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1-11.32 11.32L88 59.31V184h116.69l-18.35-18.34a8 8 0 0 1 11.32-11.32l32 32a8 8 0 0 1 0 11.32"></svg:path></svg:g>`,
})
export class PhVectorTwoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
