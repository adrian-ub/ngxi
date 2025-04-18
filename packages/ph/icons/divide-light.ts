import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDivideLightIcon],svg[ph-divide-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 128a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6m-94-50a14 14 0 1 0-14-14a14 14 0 0 0 14 14m0 100a14 14 0 1 0 14 14a14 14 0 0 0-14-14"></svg:path>`,
})
export class PhDivideLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
