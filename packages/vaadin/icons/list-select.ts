import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinListSelectIcon],svg[vaadin-list-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 0h12v2H1zm0 8h13v2H1zm0 3h11v2H1zm0 3h14v2H1zM0 3v4h16V3zm11 3H1V4h10z"></svg:path>`,
})
export class VaadinListSelectIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
