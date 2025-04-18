import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCoffeeToGoOutlineIcon],svg[mdi-coffee-to-go-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v8a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4v-1h2c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2zm2 2h8v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm10 0h2v3h-2zm1.67 8.83l-1.41 1.41L17 17H3v2h14l-1.74 1.76l1.41 1.41L20.84 18z"></svg:path>`,
})
export class MdiCoffeeToGoOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
