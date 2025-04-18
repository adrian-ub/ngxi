import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinHeaderIcon],svg[vaadin-header-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 0v7H5V0H2v16h3V9h6v7h3V0z"></svg:path>`,
})
export class VaadinHeaderIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
