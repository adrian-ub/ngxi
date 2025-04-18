import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSupersetProperOfThinIcon],svg[ph-superset-proper-of-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 128a84.09 84.09 0 0 1-84 84H64a4 4 0 0 1 0-8h72a76 76 0 0 0 0-152H64a4 4 0 0 1 0-8h72a84.09 84.09 0 0 1 84 84"></svg:path>`,
})
export class PhSupersetProperOfThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
