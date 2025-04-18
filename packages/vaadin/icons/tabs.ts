import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinTabsIcon],svg[vaadin-tabs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4V2H0v12h16V4zm-4-1h3v1h-3zM6 3h3v1H6zm9 10H1V3h4v2h10z"></svg:path>`,
})
export class VaadinTabsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
