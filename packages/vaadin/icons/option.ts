import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinOptionIcon],svg[vaadin-option-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11a1 1 0 0 0 2 0v-1H5a1 1 0 0 0-1 1"></svg:path><svg:path fill="currentColor" d="M0 0v16h16V0zm11 9a2 2 0 1 1-2 2v-1H7v1a2 2 0 1 1-2-2h1V7H5a2 2 0 1 1 2-2v1h2V5a2 2 0 1 1 2 2h-1v2z"></svg:path><svg:path fill="currentColor" d="M12 5a1 1 0 0 0-2 0v1h1a1 1 0 0 0 1-1M5 4a1 1 0 0 0 0 2h1V5a1 1 0 0 0-1-1m2 3h2v2H7zm3 4a1 1 0 1 0 1-1h-1z"></svg:path>`,
})
export class VaadinOptionIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
