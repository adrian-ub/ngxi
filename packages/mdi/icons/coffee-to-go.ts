import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCoffeeToGoIcon],svg[mdi-coffee-to-go-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19v-2h14l-1.74-1.76l1.41-1.41L20.84 18l-4.17 4.17l-1.41-1.41L17 19zM17 8V5h-2v3zm0-5a2 2 0 0 1 2 2v3c0 1.11-.89 2-2 2h-2v1a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V3z"></svg:path>`,
})
export class MdiCoffeeToGoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
