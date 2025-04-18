import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiTriangleStrokedIcon],svg[maki-triangle-stroked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.524.5a.77.77 0 0 0-.69.395l-5.5 9.87C1.022 11.307 1.395 12 2 12h11c.605 0 .978-.692.666-1.235l-5.5-9.87A.77.77 0 0 0 7.524.5M7.5 2.9l4.127 7.47H3.373z"></svg:path>`,
})
export class MakiTriangleStrokedIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
