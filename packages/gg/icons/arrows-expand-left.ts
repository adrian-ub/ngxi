import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowsExpandLeftIcon],svg[gg-arrows-expand-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.1 4.1v-2h-8v8h2V5.516l5.779 5.778l1.414-1.414L5.515 4.1zm9.8 9.8h2v8h-8v-2h4.585l-5.778-5.779l1.414-1.414l5.778 5.778z"></svg:path>`,
})
export class GgArrowsExpandLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
