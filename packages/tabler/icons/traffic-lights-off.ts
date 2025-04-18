import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTrafficLightsOffIcon],svg[tabler-traffic-lights-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 4c.912-1.219 2.36-2 4-2a5 5 0 0 1 5 5v6m0 4a5 5 0 0 1-10 0V7"></svg:path><svg:path d="M12 8a1 1 0 1 0-1-1m.291 4.295a1 1 0 0 0 1.418 1.41M11 17a1 1 0 1 0 2 0a1 1 0 1 0-2 0M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerTrafficLightsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
