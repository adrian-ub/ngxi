import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinLaptopIcon],svg[vaadin-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 11V2H2v9H0v2h16v-2zm-4 1H6v-1h4zm3-2H3V3h10z"></svg:path>`,
})
export class VaadinLaptopIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
