import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmChevronsDownIcon],svg[charm-chevrons-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 3.75L8 8.25l4.25-4.5m-8.5 5L8 13.25l4.25-4.5"></svg:path>`,
})
export class CharmChevronsDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
