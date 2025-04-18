import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmChevronsRightIcon],svg[charm-chevrons-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 12.25L8.25 8l-4.5-4.25m5 8.5L13.25 8l-4.5-4.25"></svg:path>`,
})
export class CharmChevronsRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
