import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinMenuIcon],svg[vaadin-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1h16v3H0zm0 5h16v3H0zm0 5h16v3H0z"></svg:path>`,
})
export class VaadinMenuIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
