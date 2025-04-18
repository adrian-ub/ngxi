import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6BrandsGgCircleIcon],svg[fa6-brands-gg-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M257 8C120 8 9 119 9 256s111 248 248 248s248-111 248-248S394 8 257 8m-49.5 374.8L81.8 257.1l125.7-125.7l35.2 35.4l-24.2 24.2l-11.1-11.1l-77.2 77.2l77.2 77.2l26.6-26.6l-53.1-52.9l24.4-24.4l77.2 77.2zm99-2.2l-35.2-35.2l24.1-24.4l11.1 11.1l77.2-77.2l-77.2-77.2l-26.5 26.5l53.1 52.9l-24.4 24.4l-77.2-77.2l75-75L432.2 255z"></svg:path>`,
})
export class Fa6BrandsGgCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
