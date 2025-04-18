import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerEaseInOutControlPointsIcon],svg[tabler-ease-in-out-control-points-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0 0h-2M7 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 0h2m5 0h-2m0 16h-2m-7 0c8 0 10-16 18-16"></svg:path>`,
})
export class TablerEaseInOutControlPointsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
