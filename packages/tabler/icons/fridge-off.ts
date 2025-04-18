import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFridgeOffIcon],svg[tabler-fridge-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 3h10a2 2 0 0 1 2 2v10m0 4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5m0 5h5m4 0h5M9 13v3M3 3l18 18"></svg:path>`,
})
export class TablerFridgeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
