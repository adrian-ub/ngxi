import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6BrandsFlutterIcon],svg[fa6-brands-flutter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M429.5 236.3L291.7 374.1L429.5 512H272l-59.1-59.1l-78.8-78.8L272 236.3zM272 0L16 256l78.8 78.8L429.5 0z"></svg:path>`,
})
export class Fa6BrandsFlutterIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
