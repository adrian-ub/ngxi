import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[magePlusCircleFillIcon],svg[mage-plus-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.96 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 11.96 1.75M17.25 13h-4.28v4.27a1 1 0 0 1-2 0V13H6.69a1 1 0 1 1 0-2h4.28V6.68a1 1 0 0 1 2 0v4.28h4.28a1 1 0 0 1 0 2z"></svg:path>`,
})
export class MagePlusCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
