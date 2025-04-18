import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSupersetProperOfLightIcon],svg[ph-superset-proper-of-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 128a86.1 86.1 0 0 1-86 86H64a6 6 0 0 1 0-12h72a74 74 0 0 0 0-148H64a6 6 0 0 1 0-12h72a86.1 86.1 0 0 1 86 86"></svg:path>`,
})
export class PhSupersetProperOfLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
