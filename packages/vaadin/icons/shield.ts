import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinShieldIcon],svg[vaadin-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 0v7c0 5.6 7 9 7 9s7-3.4 7-9V0zm13 7c0 4.2-4.6 7.1-6 7.9V1h6z"></svg:path>`,
})
export class VaadinShieldIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
