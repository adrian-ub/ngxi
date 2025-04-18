import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinPaddingBottomIcon],svg[vaadin-padding-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 16V0H0v16zM1 13h1v-1H1V1h14v12h-1v1h1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1H9v1H8v-1H7v1H6v-1H5v1H4v-1H3v1H2v-1H1z"></svg:path><svg:path fill="currentColor" d="M12 13h1v1h-1zm1-1h1v1h-1zm-2 0h1v1h-1zm-2 0h1v1H9zm1 1h1v1h-1zm-2 0h1v1H8zm-2 0h1v1H6zm1-1h1v1H7zm-2 0h1v1H5zm-2 0h1v1H3zm1 1h1v1H4zm-2 0h1v1H2z"></svg:path>`,
})
export class VaadinPaddingBottomIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
