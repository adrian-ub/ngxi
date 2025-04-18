import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGaugeOffIcon],svg[tabler-gauge-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.038 16.052A9 9 0 0 0 7.971 3.95M5.638 5.636a9 9 0 1 0 12.73 12.726"></svg:path><svg:path d="M11.283 11.303a1 1 0 0 0 1.419 1.41M14 10l2-2m-9 4c0-1.386.564-2.64 1.475-3.546m2.619-1.372Q11.536 7.001 12 7M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerGaugeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
