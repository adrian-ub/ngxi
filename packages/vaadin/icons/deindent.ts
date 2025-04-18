import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinDeindentIcon],svg[vaadin-deindent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10.5v-6l-4 3zM0 0h16v3H0zm6 4h10v3H6zm0 4h10v3H6zm-6 4h16v3H0z"></svg:path>`,
})
export class VaadinDeindentIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
