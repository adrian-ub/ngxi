import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageDirectionUpIcon],svg[mage-direction-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.832 17.493L6.32 20.678a2.142 2.142 0 0 1-3-2.756L9.947 4.039a2.142 2.142 0 0 1 3.885 0l6.827 14.083a2.142 2.142 0 0 1-3.057 2.756l-4.713-3.385a2.14 2.14 0 0 0-2.057 0"></svg:path>`,
})
export class MageDirectionUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
