import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmGrabVerticalIcon],svg[charm-grab-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="5.5" cy="2.5" r=".75"></svg:circle><svg:circle cx="5.5" cy="8" r=".75"></svg:circle><svg:circle cx="5.5" cy="13.5" r=".75"></svg:circle><svg:circle cx="10.496" cy="2.5" r=".75"></svg:circle><svg:circle cx="10.496" cy="8" r=".75"></svg:circle><svg:circle cx="10.496" cy="13.5" r=".75"></svg:circle></svg:g>`,
})
export class CharmGrabVerticalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
