import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinCashIcon],svg[vaadin-cash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 14H2v-1h13V6h1z"></svg:path><svg:path fill="currentColor" d="M13 4v7H1V4zm1-1H0v9h14z"></svg:path><svg:path fill="currentColor" d="M3 6H2v3h1v1h4a2.5 2.5 0 1 1 0-5H3zm8 0V5H7a2.5 2.5 0 1 1 0 5h4V9h1V6z"></svg:path>`,
})
export class VaadinCashIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
