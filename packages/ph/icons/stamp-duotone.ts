import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phStampDuotoneIcon],svg[ph-stamp-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m159.46 53l-17.78 83h-27.36L96.54 53A24 24 0 0 1 120 24h16a24 24 0 0 1 23.46 29" opacity=".2"></svg:path><svg:path d="M224 224a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8m0-80v40a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-40a16 16 0 0 1 16-16h56.43L88.72 54.71A32 32 0 0 1 120 16h16a32 32 0 0 1 31.29 38.71L151.57 128H208a16 16 0 0 1 16 16m-103.21-16h14.42l16.43-76.65A16 16 0 0 0 136 32h-16a16 16 0 0 0-15.65 19.35ZM208 184v-40H48v40z"></svg:path></svg:g>`,
})
export class PhStampDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
