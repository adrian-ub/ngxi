import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmCircleCrossIcon],svg[charm-circle-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m10.25 5.75l-4.5 4.5m0-4.5l4.5 4.5"></svg:path><svg:circle cx="8" cy="8" r="6.25"></svg:circle></svg:g>`,
})
export class CharmCircleCrossIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
