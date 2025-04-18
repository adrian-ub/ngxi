import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAirConditioningDisabledIcon],svg[tabler-air-conditioning-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 10a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></svg:path><svg:path d="M7 16v-3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3"></svg:path></svg:g>`,
})
export class TablerAirConditioningDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
