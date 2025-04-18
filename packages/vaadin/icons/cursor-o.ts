import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinCursorOIcon],svg[vaadin-cursor-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2.6L10.75 9H8.29l.63 1.41l1.8 4l-.91.34l-1.88-4.3l-.5-1.11l-1 .71L5 11.07zM4 0v13l3-2.14L9.26 16l2.8-1l-2.23-5H13z"></svg:path>`,
})
export class VaadinCursorOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
