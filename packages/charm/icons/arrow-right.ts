import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmArrowRightIcon],svg[charm-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8.75 3.25l4.5 4.5l-4.5 4.5m-6-4.5h10.5"></svg:path>`,
})
export class CharmArrowRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
