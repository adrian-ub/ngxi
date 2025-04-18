import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinSuitcaseIcon],svg[vaadin-suitcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3V1H5v2H0v12h16V3zM4 14H3V4h1zm6-11H6V2h4zm3 11h-1V4h1z"></svg:path>`,
})
export class VaadinSuitcaseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
