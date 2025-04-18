import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinPaddingLeftIcon],svg[vaadin-padding-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 16h16V0H0zM3 1v1h1V1h11v14H3v-1H2v1H1v-1h1v-1H1v-1h1v-1H1v-1h1V9H1V8h1V7H1V6h1V5H1V4h1V3H1V2h1V1z"></svg:path><svg:path fill="currentColor" d="M2 12h1v1H2zm1 1h1v1H3zm0-2h1v1H3zm0-2h1v1H3zm-1 1h1v1H2zm0-2h1v1H2zm0-2h1v1H2zm1 1h1v1H3zm0-2h1v1H3zm0-2h1v1H3zM2 4h1v1H2zm0-2h1v1H2z"></svg:path>`,
})
export class VaadinPaddingLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
