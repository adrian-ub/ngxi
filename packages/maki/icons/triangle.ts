import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiTriangleIcon],svg[maki-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.539 1c-.295 0-.489.177-.616.385l-5.846 9.538C1 11 1 11.153 1 11.308c0 .538.385.692.692.692h11.616c.384 0 .692-.154.692-.692c0-.154 0-.231-.077-.385l-5.77-9.538C8.029 1.177 7.789 1 7.54 1"></svg:path>`,
})
export class MakiTriangleIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
