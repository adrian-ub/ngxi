import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowsExpandRightIcon],svg[gg-arrows-expand-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.9 4.1v-2h8v8h-2V5.516l-5.779 5.778l-1.414-1.414l5.778-5.78zm-9.8 9.8h-2v8h8v-2H5.516l5.778-5.779l-1.414-1.414l-5.78 5.778z"></svg:path>`,
})
export class GgArrowsExpandRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
