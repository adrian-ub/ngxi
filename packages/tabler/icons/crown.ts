import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCrownIcon],svg[tabler-crown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 6l4 6l5-4l-2 10H5L3 8l5 4z"></svg:path>`,
})
export class TablerCrownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
