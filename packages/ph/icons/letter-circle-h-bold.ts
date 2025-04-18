import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLetterCircleHBoldIcon],svg[ph-letter-circle-h-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m44-124v80a12 12 0 0 1-24 0v-28h-40v28a12 12 0 0 1-24 0V88a12 12 0 0 1 24 0v28h40V88a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhLetterCircleHBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
