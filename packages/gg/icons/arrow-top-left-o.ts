import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowTopLeftOIcon],svg[gg-arrow-top-left-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 13.963H8v-6h6v2h-2.586l5.33 5.33l-1.414 1.414l-5.33-5.33z"></svg:path><svg:path fill-rule="evenodd" d="M23 12c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11s11-4.925 11-11m-2 0a9 9 0 1 0-18 0a9 9 0 0 0 18 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgArrowTopLeftOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
