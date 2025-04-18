import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phScooterLightIcon],svg[ph-scooter-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 138a34 34 0 0 0-4.89.36L173.69 38.1A6 6 0 0 0 168 34h-32a6 6 0 0 0 0 12h27.68l18.24 54.73L125.16 170H77.94a34 34 0 1 0-1.44 12H128a6 6 0 0 0 4.64-2.2l53.76-65.62l9.33 28A34 34 0 1 0 212 138M44 194a22 22 0 1 1 22-22a22 22 0 0 1-22 22m168 0a22 22 0 1 1 22-22a22 22 0 0 1-22 22"></svg:path>`,
})
export class PhScooterLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
