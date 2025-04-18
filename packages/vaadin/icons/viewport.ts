import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinViewportIcon],svg[vaadin-viewport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4H0V0h4v1H1zm11-3V0h4v4h-1V1zm3 11h1v4h-4v-1h3zM4 15v1H0v-4h1v3z"></svg:path><svg:path fill="currentColor" d="M13 3v10H3V3zm1-1H2v12h12z"></svg:path>`,
})
export class VaadinViewportIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
