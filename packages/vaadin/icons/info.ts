import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinInfoIcon],svg[vaadin-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5h4v11H6zm4-3a2 2 0 1 1-3.999.001A2 2 0 0 1 10 2"></svg:path>`,
})
export class VaadinInfoIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
