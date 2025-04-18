import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinTableIcon],svg[vaadin-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1v15h16V1zm5 14H1v-2h4zm0-3H1v-2h4zm0-3H1V7h4zm0-3H1V4h4zm5 9H6v-2h4zm0-3H6v-2h4zm0-3H6V7h4zm0-3H6V4h4zm5 9h-4v-2h4zm0-3h-4v-2h4zm0-3h-4V7h4zm0-3h-4V4h4z"></svg:path>`,
})
export class VaadinTableIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
