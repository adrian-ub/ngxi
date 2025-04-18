import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarHashtagLinearIcon],svg[solar-hashtag-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 3L5 21M19 3l-5 18m8-12H4m16 7H2"></svg:path>`,
})
export class SolarHashtagLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
