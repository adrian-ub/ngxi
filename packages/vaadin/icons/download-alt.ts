import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinDownloadAltIcon],svg[vaadin-download-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 14h16v2H0zm8-1l5-5h-3V0H6v8H3z"></svg:path>`,
})
export class VaadinDownloadAltIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
