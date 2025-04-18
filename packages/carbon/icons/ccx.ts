import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCcxIcon],svg[carbon-ccx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M10 23H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h5v2H5v6h5z" fill="currentColor"></svg:path><svg:path d="M19 23h-5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h5v2h-5v6h5z" fill="currentColor"></svg:path><svg:path d="M29 9h-2l-2 6l-2-6h-2l2.75 7L21 23h2l2-6l2 6h2l-2.75-7L29 9z" fill="currentColor"></svg:path>`,
})
export class CarbonCcxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
