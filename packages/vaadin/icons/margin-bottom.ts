import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinMarginBottomIcon],svg[vaadin-margin-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v14h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1V0zm15 12H1V1h14zM0 15h1v1H0zm1-1h1v1H1zm1 1h1v1H2zm1-1h1v1H3zm1 1h1v1H4zm1-1h1v1H5zm1 1h1v1H6zm1-1h1v1H7zm1 1h1v1H8zm1-1h1v1H9zm1 1h1v1h-1zm1-1h1v1h-1zm1 1h1v1h-1zm1-1h1v1h-1zm1 1h1v1h-1zm1-1h1v1h-1z"></svg:path>`,
})
export class VaadinMarginBottomIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
