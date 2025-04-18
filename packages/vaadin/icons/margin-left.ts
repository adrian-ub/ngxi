import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinMarginLeftIcon],svg[vaadin-margin-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0v1h1v1H2v1h1v1H2v1h1v1H2v1h1v1H2v1h1v1H2v1h1v1H2v1h1v1H2v1h1v1h13V0zm13 15H4V1h11zM0 0h1v1H0zm1 1h1v1H1zM0 2h1v1H0zm1 1h1v1H1zM0 4h1v1H0zm1 1h1v1H1zM0 6h1v1H0zm1 1h1v1H1zM0 8h1v1H0zm1 1h1v1H1zm-1 1h1v1H0zm1 1h1v1H1zm-1 1h1v1H0zm1 1h1v1H1zm-1 1h1v1H0zm1 1h1v1H1z"></svg:path>`,
})
export class VaadinMarginLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
