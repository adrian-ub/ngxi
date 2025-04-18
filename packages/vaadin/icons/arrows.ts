import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinArrowsIcon],svg[vaadin-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 8l-3-3v2H9V3h2L8 0L5 3h2v4H3V5L0 8l3 3V9h4v4H5l3 3l3-3H9V9h4v2z"></svg:path>`,
})
export class VaadinArrowsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
