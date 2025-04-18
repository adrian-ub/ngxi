import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsCoffeeIcon],svg[zondicons-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11H2a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h2V1h14v10a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4m0-2V5H2v4zm-2 8v-1h18v1l-4 2H6z"></svg:path>`,
})
export class ZondiconsCoffeeIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
