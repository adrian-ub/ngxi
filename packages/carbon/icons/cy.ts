import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCyIcon],svg[carbon-cy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M15 23h-5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h5v2h-5v6h5z" fill="currentColor"></svg:path><svg:path d="M24 9h-2l-2 7l-2-7h-2l3 9v5h2v-5l3-9z" fill="currentColor"></svg:path>`,
})
export class CarbonCyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
