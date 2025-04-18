import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinGridHIcon],svg[vaadin-grid-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v16h16V0zm5 15H1V1h4zm5 0H6V1h4zm5 0h-4V1h4z"></svg:path>`,
})
export class VaadinGridHIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
