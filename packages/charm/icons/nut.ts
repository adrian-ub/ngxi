import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmNutIcon],svg[charm-nut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m8 1.25l6.25 3.5v6.5L8 14.75l-6.25-3.5v-6.5z"></svg:path><svg:circle cx="8" cy="8" r="2.25"></svg:circle></svg:g>`,
})
export class CharmNutIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
