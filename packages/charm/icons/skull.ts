import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmSkullIcon],svg[charm-skull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M1.75 11.25h3v3h6.5v-3h3s1-9.5-6.25-9.5s-6.25 9.5-6.25 9.5"></svg:path><svg:circle cx="5.25" cy="7.75" r=".5" fill="currentColor"></svg:circle><svg:circle cx="10.75" cy="7.75" r=".5" fill="currentColor"></svg:circle></svg:g>`,
})
export class CharmSkullIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
