import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosAlpinejsIconIcon],svg[logos-alpinejs-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#77C1D2" d="M199.111 0L256 56.639l-56.889 56.64l-56.889-56.64z"></svg:path><svg:path fill="#2D3441" d="m56.889 0l117.938 117.421H61.049L0 56.639z"></svg:path>`,
})
export class LogosAlpinejsIconIcon {
  readonly viewBox = input("0 0 256 118")
  readonly width = input("2.17em")
  readonly height = input("1em")
}
