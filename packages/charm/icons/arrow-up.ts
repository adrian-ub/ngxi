import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmArrowUpIcon],svg[charm-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3.75 7.25l4.5-4.5l4.5 4.5m-4.5 6V2.75"></svg:path>`,
})
export class CharmArrowUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
