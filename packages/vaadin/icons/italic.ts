import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinItalicIcon],svg[vaadin-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0h3L8 16H5z"></svg:path>`,
})
export class VaadinItalicIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
