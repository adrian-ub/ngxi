import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBuildingBroadcastTowerIcon],svg[tabler-building-broadcast-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></svg:path><svg:path d="M16.616 13.924a5 5 0 1 0-9.23 0"></svg:path><svg:path d="M20.307 15.469a9 9 0 1 0-16.615 0"></svg:path><svg:path d="m9 21l3-9l3 9m-5-2h4"></svg:path></svg:g>`,
})
export class TablerBuildingBroadcastTowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
