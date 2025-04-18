import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinProgressbarIcon],svg[vaadin-progressbar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 5v6h16V5zm15 5H1V6h14z"></svg:path><svg:path fill="currentColor" d="M2 7h7v2H2z"></svg:path>`,
})
export class VaadinProgressbarIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
