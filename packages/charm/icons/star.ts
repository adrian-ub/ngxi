import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmStarIcon],svg[charm-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 1.75l-2.25 4l-4 .5l3 3.5l-1 4.5l4.25-2l4.25 2l-1-4.5l3-3.5l-4-.5z"></svg:path>`,
})
export class CharmStarIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
