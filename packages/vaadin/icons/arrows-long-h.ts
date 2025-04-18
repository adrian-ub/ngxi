import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinArrowsLongHIcon],svg[vaadin-arrows-long-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 8l-3-3v2H3V5L0 8l3 3V9h10v2z"></svg:path>`,
})
export class VaadinArrowsLongHIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
