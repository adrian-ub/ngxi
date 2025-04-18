import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLineVerticalBoldIcon],svg[ph-line-vertical-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 24v208a12 12 0 0 1-24 0V24a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhLineVerticalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
