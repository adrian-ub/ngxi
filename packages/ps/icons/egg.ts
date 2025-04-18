import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psEggIcon],svg[ps-egg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M277 224q0-37-17-83.5t-50-83T139 21T67.5 57.5t-50.5 83T0 224q0 58 40.5 98.5T139 363q57 0 97.5-40.5T277 224m-234 0q0-47 31.5-103.5T139 64t64.5 56.5T235 224q0 40-28 68t-68 28t-68-28t-28-68"></svg:path>`,
})
export class PsEggIcon {
  readonly viewBox = input("0 0 280 448")
  readonly width = input("0.63em")
  readonly height = input("1em")
}
