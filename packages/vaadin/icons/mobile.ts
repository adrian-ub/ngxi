import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinMobileIcon],svg[vaadin-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1v14h8V1zm5 13H7v-1h2zm2-2H5V3h6z"></svg:path>`,
})
export class VaadinMobileIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
