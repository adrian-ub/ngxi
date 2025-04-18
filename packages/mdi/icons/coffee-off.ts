import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCoffeeOffIcon],svg[mdi-coffee-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.27 2L22 20.72L20.72 22l-.99-1H2v-2h15.73l-2.29-2.29c-.44.18-.94.29-1.44.29H8c-2.21 0-4-1.79-4-4V5.27l-2-2zM22 5v3c0 1.1-.9 2-2 2h-2v3c0 .36-.06.7-.15 1.04L6.81 3H20a2 2 0 0 1 2 2m-2 0h-2v3h2z"></svg:path>`,
})
export class MdiCoffeeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
