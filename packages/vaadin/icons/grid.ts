import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinGridIcon],svg[vaadin-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v16h16V0zm5 15H1v-4h4zm0-5H1V6h4zm0-5H1V1h4zm5 10H6v-4h4zm0-5H6V6h4zm0-5H6V1h4zm5 10h-4v-4h4zm0-5h-4V6h4zm0-5h-4V1h4z"></svg:path>`,
})
export class VaadinGridIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
