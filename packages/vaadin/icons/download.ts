import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinDownloadIcon],svg[vaadin-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10h-5.5L8 12.5L5.5 10H0v6h16zM4 14H2v-2h2z"></svg:path><svg:path fill="currentColor" d="M10 6V0H6v6H3l5 5l5-5z"></svg:path>`,
})
export class VaadinDownloadIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
