import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmCoffeeIcon],svg[charm-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.75 11.25c4.5 0 4.5-5.5 0-5.5h-9v5c0 5 8.5 5 8.5 0v-5m-1.5-4v1.5m-3-1.5v1.5m-3-1.5v1.5"></svg:path>`,
})
export class CharmCoffeeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
