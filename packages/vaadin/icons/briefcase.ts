import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinBriefcaseIcon],svg[vaadin-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3V1H5v2H0v12h16V3zm-1 0H6V2h4z"></svg:path>`,
})
export class VaadinBriefcaseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
