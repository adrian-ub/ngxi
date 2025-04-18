import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmChevronsUpIcon],svg[charm-chevrons-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.25 12.25L8 7.75l-4.25 4.5m8.5-5L8 2.75l-4.25 4.5"></svg:path>`,
})
export class CharmChevronsUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
