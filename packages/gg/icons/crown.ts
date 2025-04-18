import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggCrownIcon],svg[gg-crown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m2.5 6.091l4.72 4.72L12 6.031l4.781 4.78L21.5 6.092v8.877a3 3 0 0 1-3 3h-13a3 3 0 0 1-3-3zm17 4.818v4.06a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-4.061l2.72 2.72L12 8.848l4.781 4.78z" clip-rule="evenodd"></svg:path>`,
})
export class GgCrownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
