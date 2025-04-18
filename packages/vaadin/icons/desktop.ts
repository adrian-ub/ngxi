import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinDesktopIcon],svg[vaadin-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 0H0v13h6v2H4v1h8v-1h-2v-2h6zM9 12H7v-1h2zm6-2H1V1h14z"></svg:path>`,
})
export class VaadinDesktopIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
