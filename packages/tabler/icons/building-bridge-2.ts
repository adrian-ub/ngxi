import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBuildingBridge2Icon],svg[tabler-building-bridge-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 7h12a2 2 0 0 1 2 2v9a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a4 4 0 0 0-8 0v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a2 2 0 0 1 2-2"></svg:path>`,
})
export class TablerBuildingBridge2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
