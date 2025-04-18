import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilCoffeeIcon],svg[uil-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 17h4a5 5 0 0 0 5-5v-1h1a3 3 0 0 0 0-6h-1V4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v8a5 5 0 0 0 5 5m9-10h1a1 1 0 0 1 0 2h-1ZM6 5h10v7a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3Zm15 14H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilCoffeeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
