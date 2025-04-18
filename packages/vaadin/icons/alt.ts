import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinAltIcon],svg[vaadin-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.89 9h2.22L5 5.1z"></svg:path><svg:path fill="currentColor" d="M0 0v16h16V0zm7 12l-.61-2H3.61L3 12H2l2.27-8h1.46L8 12zm3 0H9V3h1zm4-5h-1v3.5s0 .5 1 .5v1c-1 0-2-.44-2-1.44V7h-.5V6h.5V5h1v1h1z"></svg:path>`,
})
export class VaadinAltIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
