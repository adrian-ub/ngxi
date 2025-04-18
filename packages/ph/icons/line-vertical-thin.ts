import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLineVerticalThinIcon],svg[ph-line-vertical-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 24v208a4 4 0 0 1-8 0V24a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhLineVerticalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
