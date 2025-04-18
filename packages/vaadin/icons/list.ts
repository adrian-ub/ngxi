import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinListIcon],svg[vaadin-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h4v3H0zm0 4h4v3H0zm0 8h4v3H0zm0-4h4v3H0zm5-8h11v3H5zm0 4h11v3H5zm0 8h11v3H5zm0-4h11v3H5z"></svg:path>`,
})
export class VaadinListIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
