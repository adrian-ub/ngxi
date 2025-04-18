import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCompassAltFillIcon],svg[lets-icons-compass-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10M9.334 9.335l.735 3.182l2.448-2.448zm5.332 5.331l-3.184-.734l2.45-2.45zM7.044 8.303a1.05 1.05 0 0 1 1.259-1.259l6.391 1.475c.392.09.697.396.787.787l1.475 6.392a1.05 1.05 0 0 1-1.259 1.259l-6.391-1.475a1.05 1.05 0 0 1-.787-.787z" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsCompassAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
