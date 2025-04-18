import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixLinkDiagonalIcon],svg[ix-link-diagonal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m301.255 180.575l30.169 30.17l-120.679 120.68l-30.17-30.17zm0 150.85L256 376.68c-33.272 33.271-87.408 33.271-120.68 0s-33.272-87.408 0-120.68l45.255-45.255l-30.17-30.17l-45.255 45.255c-49.987 49.987-49.987 131.032 0 181.02s131.032 49.987 181.02 0l45.254-45.255zM225.83 105.151l-45.255 45.254l30.17 30.17L256 135.321c33.272-33.272 87.408-33.272 120.679 0s33.272 87.407 0 120.679l-45.255 45.255l30.17 30.17l45.255-45.255c49.987-49.987 49.987-131.032 0-181.019c-49.987-49.988-131.032-49.988-181.019 0" clip-rule="evenodd"></svg:path>`,
})
export class IxLinkDiagonalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
