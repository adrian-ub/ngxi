import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatDivideIcon],svg[fluent-emoji-flat-divide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#785DC8" d="M16 11a4 4 0 1 0 0-8a4 4 0 0 0 0 8M2 16.5c0-1.68 1.38-3.06 3.06-3.06h21.85c1.69 0 3.06 1.38 3.06 3.06c0 1.69-1.38 3.06-3.06 3.06H5.06C3.38 19.57 2 18.19 2 16.5M20 26a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path>`,
})
export class FluentEmojiFlatDivideIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
