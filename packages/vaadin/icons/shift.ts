import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinShiftIcon],svg[vaadin-shift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2v12h16V2zm6 6v3H4V8H2l3-3l3 3z"></svg:path>`,
})
export class VaadinShiftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
