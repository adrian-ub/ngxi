import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinAlignJustifyIcon],svg[vaadin-align-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h16v3H0zm0 4h16v3H0zm0 8h16v3H0zm0-4h16v3H0z"></svg:path>`,
})
export class VaadinAlignJustifyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
