import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmArrowDownIcon],svg[charm-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3.25 8.75l4.5 4.5l4.5-4.5m-4.5-6v10.5"></svg:path>`,
})
export class CharmArrowDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
