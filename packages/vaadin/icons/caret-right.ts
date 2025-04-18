import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinCaretRightIcon],svg[vaadin-caret-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 13V3l7 5z"></svg:path>`,
})
export class VaadinCaretRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
