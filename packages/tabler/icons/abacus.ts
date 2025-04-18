import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAbacusIcon],svg[tabler-abacus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v18m14 0V3M5 7h14M5 15h14M8 13v4m3-4v4m5-4v4M14 5v4m-3-4v4M8 5v4M3 21h18"></svg:path>`,
})
export class TablerAbacusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
