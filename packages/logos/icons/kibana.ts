import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosKibanaIcon],svg[logos-kibana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#F04E98" d="M256 0H0v294.789z"></svg:path><svg:path fill="#343741" d="M0 122.88v171.91l122.194-140.71C85.862 134.277 44.288 122.88 0 122.88"></svg:path><svg:path fill="#00BFB3" d="M148.59 170.54L23.2 314.945l-11.069 12.738h238.736C237.77 263.13 200.302 207.496 148.59 170.54"></svg:path>`,
})
export class LogosKibanaIcon {
  readonly viewBox = input("0 0 256 328")
  readonly width = input("0.79em")
  readonly height = input("1em")
}
