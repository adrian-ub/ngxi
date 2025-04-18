import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinResizeHIcon],svg[vaadin-resize-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7h16v2H0zm7-1h2V3h2L8 0L5 3h2zm2 4H7v3H5l3 3l3-3H9z"></svg:path>`,
})
export class VaadinResizeHIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
