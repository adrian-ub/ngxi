import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinFilterIcon],svg[vaadin-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2h14v2L9 9v7l-2-2V9L1 4zm0-2h14v1H1z"></svg:path>`,
})
export class VaadinFilterIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
