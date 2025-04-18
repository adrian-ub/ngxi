import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBedOffIcon],svg[tabler-bed-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7a2 2 0 1 0 2 2m13 8v-3h-4m-4 0H2m0-6v9m10-5v2h2m4 0h4v-2a3 3 0 0 0-3-3h-6M3 3l18 18"></svg:path>`,
})
export class TablerBedOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
