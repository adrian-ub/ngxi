import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psClothesWaterIcon],svg[ps-clothes-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M346 375h-52l-29-110q0-3-7-26l-4-26l-4 26q-2 8-7 26l-28 110h-49l-53-213h45l28 117q10 52 10 56q0-8 5-26q5-23 6-27l28-120h42l32 120q1 3 2 10t3 13q4 22 4 28q0-6 4-28q4-20 7-28l27-117h45zM256 0Q150 0 75 75T0 256q0 103 71.5 179.5T243 512h13q116-7 192.5-83T512 256q-15-110-84.5-183T256 0m175 384q-31 37-78 59.5T254 469h-11q-82 0-141-63.5T43 256q0-88 62.5-150.5T256 43q76 0 138 56.5T469 262q10 64-38 122"></svg:path>`,
})
export class PsClothesWaterIcon {
  readonly viewBox = input("0 0 520 512")
  readonly width = input("1.02em")
  readonly height = input("1em")
}
