import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinKeyboardOIcon],svg[vaadin-keyboard-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5v7H1V5zm1-1H0v9h16z"></svg:path><svg:path fill="currentColor" d="M4 10h8v1H4zm-2 0h1v1H2zm11 0h1v1h-1zm-2-2h1v1h-1zM9 8h1v1H9zM7 8h1v1H7zM5 8h1v1H5zM3 8h1v1H3zm7-2h1v1h-1zm2 0v1h1v2h1V6zM8 6h1v1H8zM6 6h1v1H6zM4 6h1v1H4zM2 6h1v1H2z"></svg:path>`,
})
export class VaadinKeyboardOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
