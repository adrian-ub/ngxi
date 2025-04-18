import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRoadIcon],svg[tabler-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 19L8 5m8 0l4 14M12 8V6m0 7v-2m0 7v-2"></svg:path>`,
})
export class TablerRoadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
