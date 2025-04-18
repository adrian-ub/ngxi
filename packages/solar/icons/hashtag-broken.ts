import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarHashtagBrokenIcon],svg[solar-hashtag-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 3L8.75 7.5l-.139.5l-.833 3M5 21l1.944-7M19 3l-5 18m8-12H4m16 7H2"></svg:path>`,
})
export class SolarHashtagBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
