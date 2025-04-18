import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmLinkIcon],svg[charm-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 4.75c3 0 4.5 1.5 4.5 3.25s-1.5 3.25-4.5 3.25M5.75 8h4.5m-4-3.25c-3 0-4.5 1.5-4.5 3.25s1.5 3.25 4.5 3.25"></svg:path>`,
})
export class CharmLinkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
