import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinAltAIcon],svg[vaadin-alt-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 7V6h-1V5h-1v1h-.5v1h.5v3.56c0 1 .56 1.44 2 1.44v-1a.9.9 0 0 1-.998-.495L13 7zM9 3h1v9H9zm-6 9l.57-2h2.82L7 12h1L5.73 4H4.27L2 12zm2-6.9L6.11 9H3.89z"></svg:path>`,
})
export class VaadinAltAIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
