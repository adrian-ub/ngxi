import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowBottomRightIcon],svg[gg-arrow-bottom-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.757 7.172l1.415-1.415l9.07 9.071v-4.585h2v8h-8v-2h4.586z"></svg:path>`,
})
export class GgArrowBottomRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
