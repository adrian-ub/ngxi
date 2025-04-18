import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTrafficConeIcon],svg[tabler-traffic-cone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 20h16M9.4 10h5.2m-6.8 5h8.4M6 20l5-15h2l5 15"></svg:path>`,
})
export class TablerTrafficConeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
