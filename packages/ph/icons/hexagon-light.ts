import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phHexagonLightIcon],svg[ph-hexagon-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m222.72 67.91l-88-48.18a13.9 13.9 0 0 0-13.44 0l-88 48.18A14 14 0 0 0 26 80.18v95.64a14 14 0 0 0 7.28 12.27l88 48.18a13.92 13.92 0 0 0 13.44 0l88-48.18a14 14 0 0 0 7.28-12.27V80.18a14 14 0 0 0-7.28-12.27M218 175.82a2 2 0 0 1-1 1.75l-88 48.18a2 2 0 0 1-1.92 0L39 177.57a2 2 0 0 1-1-1.75V80.18a2 2 0 0 1 1-1.75l88-48.18a2 2 0 0 1 1.92 0l88 48.18a2 2 0 0 1 1 1.75Z"></svg:path>`,
})
export class PhHexagonLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
