import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinWarningIcon],svg[vaadin-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1L0 15h16zm0 12c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m-1-3V6h2v4z"></svg:path>`,
})
export class VaadinWarningIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
