import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinEnterIcon],svg[vaadin-enter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0v6H1v10h14V0zm8 11H7v2l-3-2.5L7 8v2h4V7h1z"></svg:path>`,
})
export class VaadinEnterIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
