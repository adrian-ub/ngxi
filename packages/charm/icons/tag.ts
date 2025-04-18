import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmTagIcon],svg[charm-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m7.25 14.25l-5.5-5.5l7-7h5.5v5.5z"></svg:path><svg:circle cx="11" cy="5" r=".5" fill="currentColor"></svg:circle></svg:g>`,
})
export class CharmTagIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
