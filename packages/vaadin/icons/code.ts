import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinCodeIcon],svg[vaadin-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.2 14L9.7 2h1.1L6.3 14zm5.9-1h1.2L16 8l-3.7-5H11l3.8 5zm-6.2 0H3.7L0 8l3.7-5H5L1.2 8z"></svg:path>`,
})
export class VaadinCodeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
