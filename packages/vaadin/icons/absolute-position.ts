import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinAbsolutePositionIcon],svg[vaadin-absolute-position-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v16h16V0zm15 15H1V9h3v1l3-2l-3-2v1H1V1h6v3H6l2 3l2-3H9V1h6z"></svg:path>`,
})
export class VaadinAbsolutePositionIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
