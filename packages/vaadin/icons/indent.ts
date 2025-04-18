import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinIndentIcon],svg[vaadin-indent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h16v3H0zm6 4h10v3H6zm0 4h10v3H6zm-6 4h16v3H0zm0-7.5v6l4-3z"></svg:path>`,
})
export class VaadinIndentIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
