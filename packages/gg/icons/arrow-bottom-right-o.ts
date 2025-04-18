import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowBottomRightOIcon],svg[gg-arrow-bottom-right-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.037 10.037h2v6h-6v-2h2.585l-5.329-5.33l1.414-1.414l5.33 5.33z"></svg:path><svg:path fill-rule="evenodd" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-2 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgArrowBottomRightOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
