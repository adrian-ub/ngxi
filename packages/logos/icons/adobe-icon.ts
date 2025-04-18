import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosAdobeIconIcon],svg[logos-adobe-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FA0F00" d="m128.024 83.527l60.288 143.042h-39.513l-18.038-45.554H86.642zM256 0v226.54L161.353 0zM94.684 0L0 226.54V0z"></svg:path>`,
})
export class LogosAdobeIconIcon {
  readonly viewBox = input("0 0 256 227")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
