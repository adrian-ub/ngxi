import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosVectorIcon],svg[logos-vector-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="logosVector0" x1="13.523%" x2="86.414%" y1="74.679%" y2="25.305%"><svg:stop offset="0%" stop-color="#10E7FF"></svg:stop><svg:stop offset="10.3%" stop-color="#33D5FF"></svg:stop><svg:stop offset="25.5%" stop-color="#60BDFF"></svg:stop><svg:stop offset="40.8%" stop-color="#86AAFF"></svg:stop><svg:stop offset="56%" stop-color="#A39AFF"></svg:stop><svg:stop offset="71%" stop-color="#B790FF"></svg:stop><svg:stop offset="85.8%" stop-color="#C489FF"></svg:stop><svg:stop offset="100%" stop-color="#C887FF"></svg:stop></svg:lineargradient><svg:lineargradient id="logosVector1" x1="21.006%" x2="96.466%" y1="54.033%" y2="27.047%"><svg:stop offset="0%" stop-color="#10E7FF"></svg:stop><svg:stop offset="10.3%" stop-color="#33D5FF"></svg:stop><svg:stop offset="25.5%" stop-color="#60BDFF"></svg:stop><svg:stop offset="40.8%" stop-color="#86AAFF"></svg:stop><svg:stop offset="56%" stop-color="#A39AFF"></svg:stop><svg:stop offset="71%" stop-color="#B790FF"></svg:stop><svg:stop offset="85.8%" stop-color="#C489FF"></svg:stop><svg:stop offset="100%" stop-color="#C887FF"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#logosVector0)" d="M128 300.346L0 225.26V75.087L128 0l128 75.087V225.26zM17.89 214.677l109.858 64.504l109.858-64.504V85.67L128 21.165L17.89 85.67z"></svg:path><svg:path fill="url(#logosVector1)" d="m183.181 109.354l-44.85 78.866l14.614 25.701l59.464-104.567zm-50.142 0L88.19 188.22l14.614 25.701l59.465-104.567zm-89.448 0l59.464 104.567l14.614-25.7l-44.85-78.867zm0 0l59.464 104.567l14.614-25.7l-44.85-78.867zm89.448 0L88.19 188.22l14.614 25.701l59.465-104.567z"></svg:path>`,
})
export class LogosVectorIcon {
  readonly viewBox = input("0 0 256 301")
  readonly width = input("0.86em")
  readonly height = input("1em")
}
