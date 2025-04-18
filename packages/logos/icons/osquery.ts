import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosOsqueryIcon],svg[logos-osquery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#A596FF" d="M255.215.258v63.736l-63.605 63.605v-63.87z"></svg:path><svg:path d="M128.006.258v63.736l63.605 63.605v-63.87z"></svg:path><svg:path fill="#A596FF" d="M255.346 254.804H191.61l-63.605-63.605h63.867z"></svg:path><svg:path d="M255.346 127.595H191.61L128.005 191.2h63.867z"></svg:path><svg:path fill="#A596FF" d="M.801 254.936V191.2l63.605-63.605v63.869z"></svg:path><svg:path d="M128.01 254.936V191.2l-63.605-63.605v63.869z"></svg:path><svg:path fill="#A596FF" d="M.672.386h63.736l63.605 63.605H64.145z"></svg:path><svg:path d="M.672 127.594h63.736l63.605-63.605H64.145z"></svg:path>`,
})
export class LogosOsqueryIcon {
  readonly viewBox = input("0 0 256 255")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
