import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmArrowUpLeftIcon],svg[charm-arrow-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.75 4.25h-6.5v6.5m7.5 1l-7.5-7.5"></svg:path>`,
})
export class CharmArrowUpLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
