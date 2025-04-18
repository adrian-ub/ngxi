import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinResizeVIcon],svg[vaadin-resize-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 0h2v16H7zM3 5L0 8l3 3V9h3V7H3zm13 3l-3-3v2h-3v2h3v2z"></svg:path>`,
})
export class VaadinResizeVIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
