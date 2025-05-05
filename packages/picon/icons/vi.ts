import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconViIcon],svg[picon-vi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4V3h1v1M7 8V5h1v3M3 1v3l3-3H5V0h3v1L2 8H1V1H0V0h4v1"></svg:path>`,
})
export class PiconViIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
