import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinPaddingTopIcon],svg[vaadin-padding-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v16h16V0zm15 3h-1v1h1v11H1V3h1V2H1V1h1v1h1V1h1v1h1V1h1v1h1V1h1v1h1V1h1v1h1V1h1v1h1V1h1v1h1z"></svg:path><svg:path fill="currentColor" d="M3 2h1v1H3zM2 3h1v1H2zm2 0h1v1H4zm2 0h1v1H6zM5 2h1v1H5zm2 0h1v1H7zm2 0h1v1H9zM8 3h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm-1-1h1v1h-1zm2 0h1v1h-1z"></svg:path>`,
})
export class VaadinPaddingTopIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
