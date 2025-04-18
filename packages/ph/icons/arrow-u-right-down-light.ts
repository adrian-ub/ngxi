import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowURightDownLightIcon],svg[ph-arrow-u-right-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m220.24 180.24l-48 48a6 6 0 0 1-8.48 0l-48-48a6 6 0 0 1 8.48-8.48L162 209.51V88a50 50 0 0 0-100 0v88a6 6 0 0 1-12 0V88a62 62 0 0 1 124 0v121.51l37.76-37.75a6 6 0 0 1 8.48 8.48"></svg:path>`,
})
export class PhArrowURightDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
