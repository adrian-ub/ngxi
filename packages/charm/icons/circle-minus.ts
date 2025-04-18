import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmCircleMinusIcon],svg[charm-circle-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="8" cy="8" r="6.25"></svg:circle><svg:path d="M4.75 8h6.5"></svg:path></svg:g>`,
})
export class CharmCircleMinusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
