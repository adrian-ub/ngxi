import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerNorthStarIcon],svg[tabler-north-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h18m-9 9V3M7.5 7.5l9 9m-9 0l9-9"></svg:path>`,
})
export class TablerNorthStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
