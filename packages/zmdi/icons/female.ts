import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFemaleIcon],svg[zmdi-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 429H64V301H0l54-162q4-14 15.5-22t25.5-8h2q14 0 25 8t16 22l54 162h-64zM96 88q-18 0-30.5-12.5T53 45.5t12.5-30T96 3t30.5 12.5t12.5 30t-12.5 30T96 88"></svg:path>`,
})
export class ZmdiFemaleIcon {
  readonly viewBox = input("0 0 192 432")
  readonly width = input("0.45em")
  readonly height = input("1em")
}
