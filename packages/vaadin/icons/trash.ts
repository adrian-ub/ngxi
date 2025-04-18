import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinTrashIcon],svg[vaadin-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3s0-.51-2-.8v-.7A1.53 1.53 0 0 0 9.47 0h-3A1.5 1.5 0 0 0 5 1.5v.7a3.7 3.7 0 0 0-2.007.806L2 3v1h12V3zM6 1.5a.51.51 0 0 1 .499-.5h3.002a.53.53 0 0 1 .529.499v.561a10 10 0 0 0-1.527-.059c-.553 0-2.063 0-2.503.07zM2 5v1h1v9c1.234.631 2.692 1 4.236 1h1.529a9.4 9.4 0 0 0 4.289-1.025L13 6h1V5zm4 8.92q-.51-.06-1-.17V7h1zM9 14H7V7h2zm2-.28c-.267.07-.606.136-.95.184L10 7h1z"></svg:path>`,
})
export class VaadinTrashIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
