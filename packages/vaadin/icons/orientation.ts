import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinOrientationIcon],svg[vaadin-orientation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2.1c2 0 3 1.3 3 2.9h-1l1.5 2L16 5h-1c0-2.2-2-3.9-4-3.9V0L9 1.5L11 3z"></svg:path><svg:path fill="currentColor" d="M9 9h6v6H8V0H0v16h16V8H9zM7 8H6v1h1v6H1V1h6z"></svg:path><svg:path fill="currentColor" d="M2 8h1v1H2zm2 0h1v1H4z"></svg:path>`,
})
export class VaadinOrientationIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
