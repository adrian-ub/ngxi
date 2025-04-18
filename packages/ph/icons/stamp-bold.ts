import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phStampBoldIcon],svg[ph-stamp-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 224a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12m0-80v32a20 20 0 0 1-20 20H48a20 20 0 0 1-20-20v-32a20 20 0 0 1 20-20h48L83.55 54.33A36 36 0 0 1 119 12h18a36 36 0 0 1 35.44 42.33L160 124h48a20 20 0 0 1 20 20M107.17 50.11l13.2 73.89h15.26l13.2-73.89A12 12 0 0 0 137 36h-18a12 12 0 0 0-11.82 14.11ZM204 148H52v24h152Z"></svg:path>`,
})
export class PhStampBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
