import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosBulmaIcon],svg[logos-bulma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00D1B2" d="M0 256L23.273 93.091L116.364 0l116.363 116.364l-69.818 69.818L256 279.273l-139.636 93.091z"></svg:path>`,
})
export class LogosBulmaIcon {
  readonly viewBox = input("0 0 256 373")
  readonly width = input("0.69em")
  readonly height = input("1em")
}
