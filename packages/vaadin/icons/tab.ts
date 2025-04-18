import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinTabIcon],svg[vaadin-tab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2v12h16V2zm13 9h-1V8l-3 3V9H3V7h6V5l3 3V5h1z"></svg:path>`,
})
export class VaadinTabIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
