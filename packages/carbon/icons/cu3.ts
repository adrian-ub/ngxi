import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCu3Icon],svg[carbon-cu3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M10 23H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h5v2H5v6h5z" fill="currentColor"></svg:path><svg:path d="M18 23h-4a2 2 0 0 1-2-2V9h2v12h4V9h2v12a2 2 0 0 1-2 2z" fill="currentColor"></svg:path><svg:path d="M28 9h-6v2h6v4h-5v2h5v4h-6v2h6a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2z" fill="currentColor"></svg:path>`,
})
export class CarbonCu3Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
