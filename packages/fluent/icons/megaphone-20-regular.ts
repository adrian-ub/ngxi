import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMegaphone20RegularIcon],svg[fluent-megaphone-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4.802a1.5 1.5 0 0 0-1.887-1.45l-13 3.467A1.5 1.5 0 0 0 2 8.269v2.51a1.5 1.5 0 0 0 1.026 1.423L5 12.86v.89a3.25 3.25 0 0 0 6.27 1.2l4.756 1.586A1.5 1.5 0 0 0 18 15.113zm-7.68 9.832A2.251 2.251 0 0 1 6 13.75v-.556zm6.051-10.316a.5.5 0 0 1 .629.484v10.31a.5.5 0 0 1-.658.475l-13-4.333A.5.5 0 0 1 3 10.779V8.27a.5.5 0 0 1 .371-.484z"></svg:path>`,
})
export class FluentMegaphone20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
