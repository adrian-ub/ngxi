import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinModalIcon],svg[vaadin-modal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1v14h16V1zm15 13H1V4h14zm0-11h-1V2h1z"></svg:path>`,
})
export class VaadinModalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
