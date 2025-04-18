import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBongOffIcon],svg[tabler-bong-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5V3h4v6m1.5 1.5L17 8l2 2l-2.5 2.5m-.5 3.505a5 5 0 1 1-7-4.589V9M8 3h6M6.1 17h9.8M3 3l18 18"></svg:path>`,
})
export class TablerBongOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
