import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinExternalLinkIcon],svg[vaadin-external-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 16V5l-1 1v9H1V3h9l1-1H0v14z"></svg:path><svg:path fill="currentColor" d="M16 0h-5l1.8 1.8L6 8.6L7.4 10l6.8-6.8L16 5z"></svg:path>`,
})
export class VaadinExternalLinkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
