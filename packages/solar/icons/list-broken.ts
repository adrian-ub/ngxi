import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarListBrokenIcon],svg[solar-list-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20 7H4m11 5H4m5 5H4"></svg:path>`,
})
export class SolarListBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
