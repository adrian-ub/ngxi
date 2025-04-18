import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBoulesLightIcon],svg[ph-boules-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m59.22 34.29L60.29 187.22a90.2 90.2 0 0 1-12.53-18.49l121-121a90.2 90.2 0 0 1 18.46 12.56m8.49 8.49a90.2 90.2 0 0 1 12.53 18.49l-121 121a90.2 90.2 0 0 1-18.49-12.53ZM128 38a89.7 89.7 0 0 1 28.79 4.72L42.72 156.79A90 90 0 0 1 128 38m0 180a89.7 89.7 0 0 1-28.79-4.72L213.28 99.21A90 90 0 0 1 128 218"></svg:path>`,
})
export class PhBoulesLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
