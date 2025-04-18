import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phHandbagSimpleBoldIcon],svg[ph-handbag-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m243.86 197.65l-14.25-120A20.06 20.06 0 0 0 209.67 60h-29.84a52 52 0 0 0-103.66 0H46.33a20.06 20.06 0 0 0-19.94 17.65l-14.25 120A20 20 0 0 0 32.08 220h191.84a20 20 0 0 0 19.94-22.35M128 36a28 28 0 0 1 27.71 24h-55.42A28 28 0 0 1 128 36M36.5 196L49.81 84h156.38l13.31 112Z"></svg:path>`,
})
export class PhHandbagSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
