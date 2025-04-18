import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinHealthCardIcon],svg[vaadin-health-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3v10H1V3zm1-1H0v12h16z"></svg:path><svg:path fill="currentColor" d="M9 5h5v1H9zm0 2h5v1H9zm0 2h2v1H9zM6.5 5c-.6 0-1.1.6-1.5 1c-.4-.4-.9-1-1.5-1c-1.5 0-2.1 1.9-1 2.9L5 10l2.5-2.1C8.6 6.9 8 5 6.5 5"></svg:path>`,
})
export class VaadinHealthCardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
