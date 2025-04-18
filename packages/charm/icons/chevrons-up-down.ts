import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmChevronsUpDownIcon],svg[charm-chevrons-up-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.25 10.75L8 14.25l-3.25-3.5m6.5-5.5L8 1.75l-3.25 3.5"></svg:path>`,
})
export class CharmChevronsUpDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
