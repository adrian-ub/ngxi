import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAngleLightIcon],svg[ph-angle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M98 72a6 6 0 0 1 6-6a102.12 102.12 0 0 1 102 102a6 6 0 0 1-12 0a90.1 90.1 0 0 0-90-90a6 6 0 0 1-6-6m142 122H78V32a6 6 0 0 0-12 0v34H32a6 6 0 0 0 0 12h34v122a6 6 0 0 0 6 6h168a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhAngleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
