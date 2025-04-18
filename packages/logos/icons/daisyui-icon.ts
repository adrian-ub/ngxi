import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosDaisyuiIconIcon],svg[logos-daisyui-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1AD1A5" d="M66.406 280.753h123.188c34.017 0 61.594 27.577 61.594 61.594s-27.577 61.594-61.594 61.594H66.406c-34.017 0-61.594-27.577-61.594-61.594s27.577-61.594 61.594-61.594"></svg:path><svg:circle cx="128" cy="128" r="123.188" fill="#FFF"></svg:circle><svg:path fill-opacity=".2" d="M128 0c70.692 0 128 57.308 128 128s-57.308 128-128 128S0 198.692 0 128S57.308 0 128 0m0 4.812C59.965 4.812 4.812 59.965 4.812 128S59.965 251.188 128 251.188S251.188 196.035 251.188 128S196.035 4.812 128 4.812"></svg:path><svg:circle cx="128" cy="128" r="55.188" fill="#FF9903"></svg:circle>`,
})
export class LogosDaisyuiIconIcon {
  readonly viewBox = input("0 0 256 404")
  readonly width = input("0.64em")
  readonly height = input("1em")
}
