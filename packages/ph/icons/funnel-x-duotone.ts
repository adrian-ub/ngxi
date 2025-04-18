import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFunnelXDuotoneIcon],svg[ph-funnel-x-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M221.9 61.38L152 136v58.65a8 8 0 0 1-3.56 6.66l-32 21.33A8 8 0 0 1 104 216v-80L34.1 61.38A8 8 0 0 1 40 48h176a8 8 0 0 1 5.9 13.38" opacity=".2"></svg:path><svg:path d="M227.82 66.76A16 16 0 0 0 216 40H40a16 16 0 0 0-11.81 26.76l.08.09L96 139.17V216a16 16 0 0 0 24.87 13.32l32-21.34a16 16 0 0 0 7.13-13.32v-55.49l67.73-72.32Zm-81.63 63.83A8 8 0 0 0 144 136v58.66L112 216v-80a8 8 0 0 0-2.16-5.46L40 56h176Zm99.49 79.81a8 8 0 0 1-11.32 11.32L216 203.32l-18.34 18.35a8 8 0 0 1-11.31-11.32L204.69 192l-18.34-18.35a8 8 0 0 1 11.31-11.31L216 180.69l18.34-18.34a8 8 0 0 1 11.32 11.31L227.31 192Z"></svg:path></svg:g>`,
})
export class PhFunnelXDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
