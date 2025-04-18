import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinTextWidthIcon],svg[vaadin-text-width-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14.5L12 13v1H3v-1l-3 1.5L3 16v-1h9v1zM0 0v3h6v9h3V3h6V0z"></svg:path>`,
})
export class VaadinTextWidthIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
