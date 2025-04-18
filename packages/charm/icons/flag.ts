import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmFlagIcon],svg[charm-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1.75 14.25v-11s2-1.5 4-1.5s2.5 1.5 4.5 1.5s4-1.5 4-1.5v7s-2 1.5-4 1.5s-2.5-1.5-4.5-1.5s-4 1.5-4 1.5"></svg:path>`,
})
export class CharmFlagIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
