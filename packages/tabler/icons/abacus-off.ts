import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAbacusOffIcon],svg[tabler-abacus-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5v16m14 0v-2m0-4V3M5 7h2m4 0h8M5 15h10m-7-2v4m3-4v4m5-1v1M14 5v4m-3-4v2M8 8v1M3 21h18M3 3l18 18"></svg:path>`,
})
export class TablerAbacusOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
