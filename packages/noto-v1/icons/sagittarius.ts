import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1SagittariusIcon],svg[noto-v1-sagittarius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fcc21b" d="M47.44 14.81v16.57h37.47L47.44 68.84l-15.6-15.6l-11.72 11.71l15.61 15.61l-20.92 20.91l11.72 11.72l20.91-20.92l15.61 15.6l11.71-11.71l-15.6-15.6l37.46-37.47v37.46h16.57V14.81z"></svg:path>`,
})
export class NotoV1SagittariusIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
