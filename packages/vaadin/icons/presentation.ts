import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinPresentationIcon],svg[vaadin-presentation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1H9V0H7v1H0v11h5l-2 4h2.2l2-4h1.5l2 4H13l-2-4h5zm-1 10H1V2h14z"></svg:path><svg:path fill="currentColor" d="M6 4v5l4-2.5z"></svg:path>`,
})
export class VaadinPresentationIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
