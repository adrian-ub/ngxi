import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosHtmxIconIcon],svg[logos-htmx-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#111" d="M181.395 42.749L256 74.204v21.858l-74.605 31.017l-5.917-21.497l55.169-20.705l-55.169-20.784zm-106.79-.001L0 74.204v21.858l74.605 31.017l5.917-21.497l-55.169-20.705l55.169-20.784z"></svg:path><svg:path fill="#4065C5" d="M144.34 0h25.664L112.99 167.111H85.996z"></svg:path>`,
})
export class LogosHtmxIconIcon {
  readonly viewBox = input("0 0 256 168")
  readonly width = input("1.53em")
  readonly height = input("1em")
}
