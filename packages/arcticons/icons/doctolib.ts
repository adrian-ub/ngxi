import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDoctolibIcon],svg[arcticons-doctolib-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.888 11.548a120.4 120.4 0 0 0-4.89 20.964"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.288 6.027c9.294-.908 20.824-1.537 24.108 6.08s1.048 19.077-2.166 23.62s-10.46 7.448-17.4 6.638c-9.573-1.118-16.845-4.659-16.841-12.858a8.64 8.64 0 0 1 1.892-5.062"></svg:path>`,
})
export class ArcticonsDoctolibIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
