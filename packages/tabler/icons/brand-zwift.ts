import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandZwiftIcon],svg[tabler-brand-zwift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.5 4C4.035 4 3 5.101 3 6.5S4.035 9 5.5 9H8l-4.637 7.19a2.43 2.43 0 0 0-.011 2.538c.473.787 1.35 1.272 2.3 1.272H16.5c1.465 0 2.5-1.101 2.5-2.5S17.965 15 16.5 15H14l7-11z"></svg:path>`,
})
export class TablerBrandZwiftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
