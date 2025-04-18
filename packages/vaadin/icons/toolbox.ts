import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinToolboxIcon],svg[vaadin-toolbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8h6v2h4V8h6v6H0z"></svg:path><svg:path fill="currentColor" d="M7 7h2v2H7zm4-3V2H5v2H0v3h6V6h4v1h6V4zM6 4V3h4v1z"></svg:path>`,
})
export class VaadinToolboxIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
