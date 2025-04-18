import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerIceCreamIcon],svg[tabler-ice-cream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21.5V17m-4 0h8V7a4 4 0 1 0-8 0zm0-6.5L16 7m-8 7.5l8-3.5"></svg:path>`,
})
export class TablerIceCreamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
