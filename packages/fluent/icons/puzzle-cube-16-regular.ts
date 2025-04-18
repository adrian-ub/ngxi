import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPuzzleCube16RegularIcon],svg[fluent-puzzle-cube-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5v6.5A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2H4.999v1H5v2zm8 8H6v-2h4zm-7-2h2v2h-.5A1.5 1.5 0 0 1 3 11.5zm7-1H6V6h4zM3 6h2v4H3zm7-1H6V3h4zm1 1h2v4h-2zm0 5h2v.5a1.5 1.5 0 0 1-1.5 1.5H11zm2-6.5V5h-2V3h.5A1.5 1.5 0 0 1 13 4.5"></svg:path>`,
})
export class FluentPuzzleCube16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
