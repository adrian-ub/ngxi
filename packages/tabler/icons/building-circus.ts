import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBuildingCircusIcon],svg[tabler-building-circus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 11h16m-8-4.5c0 1-5 4.5-8 4.5m8-4.5c0 1 5 4.5 8 4.5M6 11q-.5 8-2 10h4c1 0 4-4 4-9v-1m6 0q.5 8 2 10h-4c-1 0-4-4-4-9v-1"></svg:path><svg:path d="M12 7V3l2 1h-2"></svg:path></svg:g>`,
})
export class TablerBuildingCircusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
