import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosEraserIconIcon],svg[logos-eraser-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#EB043B" d="M121.5 97.041H7.542c-5.844 0-9.466-8.093-6.461-14.424l37.08-77.97C39.56 1.764 41.989 0 44.664 0h76.838z"></svg:path><svg:path fill="#0085FF" d="M134.54 0h113.92c5.843 0 9.464 8.093 6.46 14.424l-37.081 77.97c-1.357 2.844-3.826 4.607-6.461 4.607H134.54z"></svg:path>`,
})
export class LogosEraserIconIcon {
  readonly viewBox = input("0 0 256 98")
  readonly width = input("2.62em")
  readonly height = input("1em")
}
