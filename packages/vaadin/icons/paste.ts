import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinPasteIcon],svg[vaadin-paste-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4h-3V0H0v14h6v2h10V7zM3 1h4v1H3zm12 14H7V5h5v3h3zm-2-8V5l2 2z"></svg:path>`,
})
export class VaadinPasteIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
