import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBoltIcon],svg[fa-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M885 438q18 20 7 44L352 1639q-13 25-42 25q-4 0-14-2q-17-5-25.5-19t-4.5-30l197-808L57 906q-4 1-12 1q-18 0-31-11q-18-15-13-39L202 32q4-14 16-23t28-9h328q19 0 32 12.5T619 42q0 8-5 18L443 523l396-98q8-2 12-2q19 0 34 15"></svg:path>`,
})
export class FaBoltIcon {
  readonly viewBox = input("0 0 896 1664")
  readonly width = input("0.54em")
  readonly height = input("1em")
}
