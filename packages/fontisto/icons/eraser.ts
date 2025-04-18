import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoEraserIcon],svg[fontisto-eraser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.199 21.599h-9.103l9.952-9.952a1.196 1.196 0 0 0 0-1.696l-9.6-9.6a1.196 1.196 0 0 0-1.696 0L.351 14.75a1.196 1.196 0 0 0 0 1.696l7.2 7.203c.217.217.517.351.848.351h16.834a1.2 1.2 0 1 0-.035-2.399h.002zM15.6 2.896l7.903 7.903l-6.943 6.943l-7.903-7.903z"></svg:path>`,
})
export class FontistoEraserIcon {
  readonly viewBox = input("0 0 26 24")
  readonly width = input("1.09em")
  readonly height = input("1em")
}
