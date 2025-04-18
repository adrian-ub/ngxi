import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiMaleFemaleIcon],svg[zmdi-male-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 429V269H0V152q0-18 12.5-30.5T43 109h64q17 0 29.5 12.5T149 152v117h-32v160zm267 0h-64V301h-64l54-162q4-14 15.5-22t24.5-8h3q14 0 25 8t15 22l55 162h-64zM74.5 88q-17.5 0-30-12.5T32 45.5t12.5-30T74.5 3t30 12.5t12.5 30t-12.5 30t-30 12.5m192 0q-17.5 0-30-12.5t-12.5-30t12.5-30t30-12.5t30 12.5t12.5 30t-12.5 30t-30 12.5"></svg:path>`,
})
export class ZmdiMaleFemaleIcon {
  readonly viewBox = input("0 0 368 432")
  readonly width = input("0.86em")
  readonly height = input("1em")
}
