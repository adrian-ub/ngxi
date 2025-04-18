import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinAddDockIcon],svg[vaadin-add-dock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 11v5h16v-5zm12 4H9v-3h3zm0-8V5c0-5-8-5-8-5s5 0 5 5v2H7l3.5 3L14 7z"></svg:path>`,
})
export class VaadinAddDockIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
