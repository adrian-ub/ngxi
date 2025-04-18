import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFlag2OffIcon],svg[tabler-flag-2-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14h9m4 0h1V5H9M5 5v16M3 3l18 18"></svg:path>`,
})
export class TablerFlag2OffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
