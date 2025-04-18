import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMeterCubeIcon],svg[tabler-meter-cube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 5h1.5a1.5 1.5 0 0 1 0 3H18h.5a1.5 1.5 0 0 1 0 3H17M4 12v6m0-4a2 2 0 0 1 2-2h.5A2.5 2.5 0 0 1 9 14.5V18m0-2.5v-1a2.5 2.5 0 1 1 5 0V18"></svg:path>`,
})
export class TablerMeterCubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
