import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCrownOffIcon],svg[tabler-crown-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 18H5L3.135 8.673a.25.25 0 0 1 .4-.244L8 12l1.6-2.4m1.596-2.394L12 6l4 6l4.464-3.571a.25.25 0 0 1 .401.244l-1.363 6.818M3 3l18 18"></svg:path>`,
})
export class TablerCrownOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
