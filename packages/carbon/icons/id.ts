import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIdIcon],svg[carbon-id-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M10 9h2v2h-2z" fill="currentColor"></svg:path><svg:path d="M18 23h-4V9h4a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4zm-2-2h2a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-2z" fill="currentColor"></svg:path><svg:path d="M10 13h2v10h-2z" fill="currentColor"></svg:path>`,
})
export class CarbonIdIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
