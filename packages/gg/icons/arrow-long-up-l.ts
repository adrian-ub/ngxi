import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowLongUpLIcon],svg[gg-arrow-long-up-l-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.032 1.019l4.21 4.274l-1.424 1.404l-1.799-1.826l-.051 16.11h1.996v2h-6v-2h2.004l.051-16.157l-1.858 1.83l-1.403-1.425z"></svg:path>`,
})
export class GgArrowLongUpLIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
