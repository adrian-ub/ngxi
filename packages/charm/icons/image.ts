import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmImageIcon],svg[charm-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M1.75 2.75h12.5v10.5H1.75z"></svg:path><svg:path d="m3.75 13.2l6.5-5.5l4 3"></svg:path><svg:circle cx="5.25" cy="6.25" r=".5" fill="currentColor"></svg:circle></svg:g>`,
})
export class CharmImageIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
