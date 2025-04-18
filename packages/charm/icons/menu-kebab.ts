import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmMenuKebabIcon],svg[charm-menu-kebab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="8" cy="2.5" r=".75"></svg:circle><svg:circle cx="8" cy="8" r=".75"></svg:circle><svg:circle cx="8" cy="13.5" r=".75"></svg:circle></svg:g>`,
})
export class CharmMenuKebabIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
