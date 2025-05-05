import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconMenuIcon],svg[picon-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1V0h8v1M0 7V6h8v1M0 4V3h8v1"></svg:path>`,
})
export class PiconMenuIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
