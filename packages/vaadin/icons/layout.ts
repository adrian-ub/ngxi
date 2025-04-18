import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinLayoutIcon],svg[vaadin-layout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v16h16V0zm1 3h4v12H1zm14 12H6V3h9z"></svg:path>`,
})
export class VaadinLayoutIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
