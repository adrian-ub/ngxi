import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCu1Icon],svg[carbon-cu1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M10 23H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h5v2H5v6h5z" fill="currentColor"></svg:path><svg:path d="M18 23h-4a2 2 0 0 1-2-2V9h2v12h4V9h2v12a2 2 0 0 1-2 2z" fill="currentColor"></svg:path><svg:path d="M27 21V9.01h-5v2h3V21h-3v2h8v-2h-3z" fill="currentColor"></svg:path>`,
})
export class CarbonCu1Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
