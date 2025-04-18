import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqFilterAlt4Icon],svg[marketeq-filter-alt-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9.27 9.708l11.563 13.209V43.75l8.334-4.167V22.917L40.729 9.708a2.083 2.083 0 0 0-1.562-3.458H10.833a2.083 2.083 0 0 0-1.562 3.458"></svg:path>`,
})
export class MarketeqFilterAlt4Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
