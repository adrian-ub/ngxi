import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosVuetifyjsIcon],svg[logos-vuetifyjs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1697F6" d="m130.711 49.564l-51.043 88.428L128 221.754l64.015-110.877L256 0h-96.692z"></svg:path><svg:path fill="#AEDDFF" d="m64.015 110.877l3.352 5.831l47.748-82.742L134.734 0H0z"></svg:path><svg:path fill="#1867C0" d="M159.308 0C183.503 79.623 128 221.754 128 221.754l-48.332-83.762z"></svg:path><svg:path fill="#7BC6FF" d="M134.734 0C32.794 0 67.367 116.708 67.367 116.708z"></svg:path>`,
})
export class LogosVuetifyjsIcon {
  readonly viewBox = input("0 0 256 222")
  readonly width = input("1.16em")
  readonly height = input("1em")
}
