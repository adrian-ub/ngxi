import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinCalendarIcon],svg[vaadin-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 1v3h-3V1H5v3H2V1H0v15h16V1zM3 15H1v-2h2zm0-3H1v-2h2zm0-3H1V7h2zm3 6H4v-2h2zm0-3H4v-2h2zm0-3H4V7h2zm3 6H7v-2h2zm0-3H7v-2h2zm0-3H7V7h2zm3 6h-2v-2h2zm0-3h-2v-2h2zm0-3h-2V7h2zm3 6h-2v-2h2zm0-3h-2v-2h2zm0-3h-2V7h2z"></svg:path><svg:path fill="currentColor" d="M3 0h1v3H3zm9 0h1v3h-1z"></svg:path>`,
})
export class VaadinCalendarIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
