import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsFacebookIcon],svg[grommet-icons-facebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#grommetIconsFacebook0)"><svg:path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12c0 6.016 4.432 10.984 10.207 11.852V15.18h-2.97v-3.155h2.97V9.927c0-3.475 1.693-5 4.58-5c1.384 0 2.115.102 2.462.149v2.753h-1.97c-1.226 0-1.655 1.163-1.655 2.473v1.724h3.594l-.488 3.155h-3.106v8.696C19.481 23.083 24 18.075 24 12c0-6.627-5.373-12-12-12"></svg:path></svg:g><svg:defs><svg:clippath id="grommetIconsFacebook0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GrommetIconsFacebookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
