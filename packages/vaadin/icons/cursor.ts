import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinCursorIcon],svg[vaadin-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0v13l3.31-3.47L10 16l1.37-.63L8.65 9H13z"></svg:path>`,
})
export class VaadinCursorIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
