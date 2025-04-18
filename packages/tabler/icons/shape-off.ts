import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerShapeOffIcon],svg[tabler-shape-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.575 3.597a2 2 0 0 0 2.849 2.808M17 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0M3 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0m14.574-1.402a2 2 0 0 0 2.826 2.83M5 7v10M9 5h8M7 19h10m2-12v8M3 3l18 18"></svg:path>`,
})
export class TablerShapeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
