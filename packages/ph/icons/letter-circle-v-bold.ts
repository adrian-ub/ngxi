import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLetterCircleVBoldIcon],svg[ph-letter-circle-v-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m43.14-111.54l-32 80a12 12 0 0 1-22.28 0l-32-80a12 12 0 1 1 22.28-8.92L128 143.69l20.86-52.15a12 12 0 0 1 22.28 8.92"></svg:path>`,
})
export class PhLetterCircleVBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
