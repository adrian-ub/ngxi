import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosBiomejsIconIcon],svg[logos-biomejs-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#60A5FA" d="M127.999 0L70.978 98.758c21.635-6.67 44.911-7.659 67.474-2.337l19.27 4.549l-18.13 76.878l-19.298-4.548c-14.825-3.497-30.278-.032-42.23 9.416A49.7 49.7 0 0 0 64.15 200.04l-17.838-8.63a69.6 69.6 0 0 1 19.444-24.231a69.45 69.45 0 0 1 59.1-13.16l9.037-38.315a108.94 108.94 0 0 0-92.577 20.612C15.234 156.958 0 188.426 0 221.686l256 .008z"></svg:path>`,
})
export class LogosBiomejsIconIcon {
  readonly viewBox = input("0 0 256 222")
  readonly width = input("1.16em")
  readonly height = input("1em")
}
