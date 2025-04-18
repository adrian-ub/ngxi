import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDotOutlineFillIcon],svg[ph-dot-outline-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 128a28 28 0 1 1-28-28a28 28 0 0 1 28 28"></svg:path>`,
})
export class PhDotOutlineFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
