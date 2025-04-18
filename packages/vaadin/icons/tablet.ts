import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinTabletIcon],svg[vaadin-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2v12h16V2zm13 11H2V3h11zm2-4h-1V7h1z"></svg:path>`,
})
export class VaadinTabletIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
