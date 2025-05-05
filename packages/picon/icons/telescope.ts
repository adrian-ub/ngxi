import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconTelescopeIcon],svg[picon-telescope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 0l3 3l-7 3.5L0 5m4.5-1L7 8H6L5 6v2H4V6L3 8H2"></svg:path>`,
})
export class PiconTelescopeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
