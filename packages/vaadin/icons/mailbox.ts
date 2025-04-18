import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinMailboxIcon],svg[vaadin-mailbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1H3l-3 9v5h16v-5zm-2 9v2H5v-2H1.1l2.7-8h8.6l2.7 8z"></svg:path>`,
})
export class VaadinMailboxIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
