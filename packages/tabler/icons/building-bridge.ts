import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBuildingBridgeIcon],svg[tabler-building-bridge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 5v14M18 5v14M2 15h20M3 8a7.5 7.5 0 0 0 3-2a6.5 6.5 0 0 0 12 0a7.5 7.5 0 0 0 3 2m-9 2v5"></svg:path>`,
})
export class TablerBuildingBridgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
