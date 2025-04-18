import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPillOffIcon],svg[tabler-pill-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10.495 6.505l2-2a4.95 4.95 0 0 1 7 7l-2 2m-2 2l-4 4a4.95 4.95 0 0 1-7-7l4-4M8.5 8.5l7 7M3 3l18 18"></svg:path>`,
})
export class TablerPillOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
