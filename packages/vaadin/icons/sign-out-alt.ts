import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinSignOutAltIcon],svg[vaadin-sign-out-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 0h2v16h-2zM8 6H0v4h8v3l5-5l-5-5z"></svg:path>`,
})
export class VaadinSignOutAltIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
