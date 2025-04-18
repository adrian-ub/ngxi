import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowBendRightDownLightIcon],svg[ph-arrow-bend-right-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m204.24 180.24l-48 48a6 6 0 0 1-8.48 0l-48-48a6 6 0 0 1 8.48-8.48L146 209.51V128a90.1 90.1 0 0 0-90-90a6 6 0 0 1 0-12a102.12 102.12 0 0 1 102 102v81.51l37.76-37.75a6 6 0 0 1 8.48 8.48"></svg:path>`,
})
export class PhArrowBendRightDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
