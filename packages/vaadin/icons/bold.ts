import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinBoldIcon],svg[vaadin-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7.5s2-.8 2-3.6C13-.2 7.9 0 6 0H2v16h4c3.7 0 8 0 8-4.4c0-3.8-3-4.1-3-4.1M9 4.4C9 6.2 7.5 6 6 6V3c1.8 0 3 .1 3 1.4M6 13V9c1.8 0 4-.3 4 2.2c0 1.9-2.5 1.8-4 1.8"></svg:path>`,
})
export class VaadinBoldIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
