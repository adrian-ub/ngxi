import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTrafficLightsIcon],svg[tabler-traffic-lights-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 7a5 5 0 0 1 5-5h0a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5h0a5 5 0 0 1-5-5z"></svg:path><svg:path d="M11 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 5a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></svg:path></svg:g>`,
})
export class TablerTrafficLightsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
