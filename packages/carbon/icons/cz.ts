import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCzIcon],svg[carbon-cz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M14 23H9a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h5v2H9v6h5z" fill="currentColor"></svg:path><svg:path d="M24 9h-8v2h6l-6 10v2h8v-2h-6l6-10V9z" fill="currentColor"></svg:path>`,
})
export class CarbonCzIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
