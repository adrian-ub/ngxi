import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowBottomLeftIcon],svg[gg-arrow-bottom-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.243 7.172l-1.415-1.415l-9.07 9.071v-4.585h-2v8h8v-2H9.17z"></svg:path>`,
})
export class GgArrowBottomLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
