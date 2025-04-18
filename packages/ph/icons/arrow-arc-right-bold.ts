import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowArcRightBoldIcon],svg[ph-arrow-arc-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 88v64a12 12 0 0 1-12 12h-64a12 12 0 0 1 0-24h34.9l-15.48-15.37A84 84 0 0 0 44 184a12 12 0 0 1-24 0a108 108 0 0 1 184.37-76.37L220 123.16V88a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhArrowArcRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
