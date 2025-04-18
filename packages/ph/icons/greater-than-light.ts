import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGreaterThanLightIcon],svg[ph-greater-than-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 128a6 6 0 0 1-3.43 5.42l-152 72a6 6 0 1 1-5.14-10.84L202 128L61.43 61.42a6 6 0 1 1 5.14-10.84l152 72A6 6 0 0 1 222 128"></svg:path>`,
})
export class PhGreaterThanLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
