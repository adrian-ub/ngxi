import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRoadOffIcon],svg[tabler-road-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 19L7.332 7.339M16 5l2.806 9.823M12 8V6m0 7v-1m0 6v-2M3 3l18 18"></svg:path>`,
})
export class TablerRoadOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
