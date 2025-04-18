import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamBoldIcon],svg[jam-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.455v2.727h1.5c.828 0 1.5-.61 1.5-1.364c0-.753-.672-1.363-1.5-1.363zm3.514-1.24C6.413 4.793 7 5.744 7 6.819C7 8.575 5.433 10 3.5 10H0V.91C0 .406.448 0 1 0h2c1.657 0 3 1.221 3 2.727c0 .55-.179 1.06-.486 1.489zM2 1.819v1.818h1c.552 0 1-.407 1-.909s-.448-.909-1-.909z"></svg:path>`,
})
export class JamBoldIcon {
  readonly viewBox = input("-8.5 -7 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
