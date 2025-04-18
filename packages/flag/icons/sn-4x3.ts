import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagSn4x3Icon],svg[flag-sn-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" stroke-width="1pt"><svg:path fill="#0b7226" d="M0 0h213.3v480H0z"></svg:path><svg:path fill="#ff0" d="M213.3 0h213.3v480H213.3z"></svg:path><svg:path fill="#bc0000" d="M426.6 0H640v480H426.6z"></svg:path></svg:g><svg:path fill="#0b7226" d="M342 218.8h71.8l-56.6 43.6l20.7 69.3l-56.6-43.6l-56.6 41.6l20.7-67.3l-56.6-43.6h69.8l22.7-71.3z"></svg:path>`,
})
export class FlagSn4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
