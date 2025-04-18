import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsCamcorderIcon],svg[flat-color-icons-camcorder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#607D8B" d="M20 42H10c-2.2 0-4-1.8-4-4V15c0-5 4-9 9-9s9 4 9 9v23c0 2.2-1.8 4-4 4"></svg:path><svg:circle cx="15" cy="15" r="7" fill="#455A64"></svg:circle><svg:circle cx="15" cy="15" r="5.2" fill="#42A5F5"></svg:circle><svg:path fill="#90CAF9" d="M18.3 13c-.8-.9-2-1.5-3.3-1.5s-2.4.5-3.3 1.5c-.3.4-.3.9.1 1.2s.9.3 1.2-.1c1-1.2 2.9-1.2 3.9 0c.2.2.4.3.7.3c.2 0 .4-.1.6-.2c.4-.3.4-.9.1-1.2"></svg:path><svg:path fill="#607D8B" d="M40 31H28c-1.1 0-2-.9-2-2V19c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2"></svg:path><svg:path fill="#455A64" d="M24 19h2v10h-2z"></svg:path><svg:path fill="#03A9F4" d="M28 19h12v10H28z"></svg:path><svg:path fill="#4FC3F7" d="M33 22.2L29 28h8z"></svg:path><svg:g fill="#B3E5FC"><svg:circle cx="37.5" cy="21.5" r="1"></svg:circle><svg:path d="M36 24.2L33 28h6z"></svg:path></svg:g><svg:circle cx="15" cy="35" r="3" fill="#455A64"></svg:circle><svg:circle cx="15" cy="35" r="2" fill="#F44336"></svg:circle>`,
})
export class FlatColorIconsCamcorderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
