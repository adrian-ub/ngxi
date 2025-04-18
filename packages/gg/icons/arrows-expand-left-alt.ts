import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowsExpandLeftAltIcon],svg[gg-arrows-expand-left-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.1 2.1v2H5.516l5.778 5.779l-1.414 1.414L4.1 5.515V10.1h-2v-8zm11.8 11.8h-2v4.585l-5.779-5.778l-1.414 1.414l5.778 5.778H13.9v2h8zm-5.657-4.728l-1.415-1.415l-7.07 7.072l1.414 1.414z"></svg:path>`,
})
export class GgArrowsExpandLeftAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
