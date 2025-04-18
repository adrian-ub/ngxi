import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phScalesDuotoneIcon],svg[ph-scales-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m56 88l32 80c0 17.67-20 24-32 24s-32-6.33-32-24Zm144-32l-32 80c0 17.67 20 24 32 24s32-6.33 32-24Z" opacity=".2"></svg:path><svg:path d="m239.43 133l-32-80a8 8 0 0 0-9.16-4.84L136 62V40a8 8 0 0 0-16 0v25.58L54.26 80.19A8 8 0 0 0 48.57 85v.06l-32 79.94a7.9 7.9 0 0 0-.57 3c0 23.31 24.54 32 40 32s40-8.69 40-32a7.9 7.9 0 0 0-.57-3L66.92 93.77L120 82v126h-16a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16h-16V78.42l51-11.32l-26.43 65.9a7.9 7.9 0 0 0-.57 3c0 23.31 24.54 32 40 32s40-8.69 40-32a7.9 7.9 0 0 0-.57-3M56 184c-7.53 0-22.76-3.61-23.93-14.64L56 109.54l23.93 59.82C78.76 180.39 63.53 184 56 184m144-32c-7.53 0-22.76-3.61-23.93-14.64L200 77.54l23.93 59.82C222.76 148.39 207.53 152 200 152"></svg:path></svg:g>`,
})
export class PhScalesDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
