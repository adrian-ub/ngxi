import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLogoJupyterIcon],svg[carbon-logo-jupyter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26.077 3.588a1.69 1.69 0 1 1-1.76-1.585a1.67 1.67 0 0 1 1.76 1.585M16.219 23.11c-4.486 0-8.43-1.61-10.469-3.988a11.162 11.162 0 0 0 20.938 0c-2.034 2.378-5.962 3.988-10.469 3.988m0-15.463c4.487 0 8.43 1.61 10.469 3.988a11.162 11.162 0 0 0-20.938 0c2.04-2.382 5.963-3.988 10.47-3.988m-6.176 20.09a2.109 2.109 0 1 1-.203-.797a2.1 2.1 0 0 1 .203.798M6.26 7.107A1.226 1.226 0 1 1 7.452 5.83A1.24 1.24 0 0 1 6.26 7.106"></svg:path>`,
})
export class CarbonLogoJupyterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
