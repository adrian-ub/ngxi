import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmGrabHorizontalIcon],svg[charm-grab-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="2.5" cy="5.5" r=".75"></svg:circle><svg:circle cx="8" cy="5.5" r=".75"></svg:circle><svg:circle cx="13.5" cy="5.5" r=".75"></svg:circle><svg:circle cx="2.5" cy="10.5" r=".75"></svg:circle><svg:circle cx="8" cy="10.5" r=".75"></svg:circle><svg:circle cx="13.5" cy="10.5" r=".75"></svg:circle></svg:g>`,
})
export class CharmGrabHorizontalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
