import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosEthereumColorIcon],svg[logos-ethereum-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5A9DED" d="M256 241.65L128 426.8V322.457zm-67.84 65.08l-41.09 25.858v33.473z"></svg:path><svg:path fill="#53D3E0" d="M0 241.65L128 426.8V322.457zm67.84 65.08l41.09 25.858v33.473z"></svg:path><svg:path fill="#D995D1" d="m144.238 156.998l84.775 47.215l3.005 9.187l-10.094 8.812l-77.686-43.358z"></svg:path><svg:path fill="#A6E276" d="m111.818 156.998l-84.775 47.215l-3.005 9.187l10.094 8.812l77.686-43.358z"></svg:path><svg:path fill="#FF9C92" d="m128 0l128 219.203l-128 80.608zm18.904 70.317V266.03l83.622-52.631z"></svg:path><svg:path fill="#FFE94D" d="M128 0L0 219.203l128 80.608zm-18.904 70.317V266.03L25.474 213.4z"></svg:path>`,
})
export class LogosEthereumColorIcon {
  readonly viewBox = input("0 0 256 427")
  readonly width = input("0.6em")
  readonly height = input("1em")
}
