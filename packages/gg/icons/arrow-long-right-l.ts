import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowLongRightLIcon],svg[gg-arrow-long-right-l-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.916 7.757l4.25 4.236l-4.236 4.25l-1.416-1.412l1.819-1.825l-16.5.022v2.002h-2v-6h2v1.999l16.51-.023l-1.838-1.832z"></svg:path>`,
})
export class GgArrowLongRightLIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
