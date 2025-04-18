import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmSearchIcon],svg[charm-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m11.25 11.25l3 3"></svg:path><svg:circle cx="7.5" cy="7.5" r="4.75"></svg:circle></svg:g>`,
})
export class CharmSearchIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
