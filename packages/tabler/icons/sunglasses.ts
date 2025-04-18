import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSunglassesIcon],svg[tabler-sunglasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4H6L3 14M16 4h2l3 10m-11 2h4m7 .5a3.5 3.5 0 0 1-7 0V14h7zm-11 0a3.5 3.5 0 0 1-7 0V14h7zM4 14l4.5 4.5M15 14l4.5 4.5"></svg:path>`,
})
export class TablerSunglassesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
