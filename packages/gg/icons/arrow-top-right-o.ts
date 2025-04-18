import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowTopRightOIcon],svg[gg-arrow-top-right-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14 13.963h2v-6h-6v2h2.586l-5.33 5.33l1.414 1.414l5.33-5.33z"></svg:path><svg:path fill-rule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m2 0a9 9 0 1 1 18 0a9 9 0 0 1-18 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgArrowTopRightOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
