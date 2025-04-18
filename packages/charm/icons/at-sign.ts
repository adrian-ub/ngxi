import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmAtSignIcon],svg[charm-at-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M10.25 8c0 3.25 4 3.25 4 0A6.25 6.25 0 1 0 8 14.25c2.25 0 3.25-1 3.25-1"></svg:path><svg:circle cx="8" cy="8" r="2.25"></svg:circle></svg:g>`,
})
export class CharmAtSignIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
