import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerIceCreamOffIcon],svg[tabler-ice-cream-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21.5V17M8 8v9h8v-1m0-4V7a4 4 0 0 0-7.277-2.294M8 10.5l1.74-.76m2.79-1.222L16 7m-8 7.5l4.488-1.964M3 3l18 18"></svg:path>`,
})
export class TablerIceCreamOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
