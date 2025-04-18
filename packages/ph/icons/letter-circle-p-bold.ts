import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLetterCirclePBoldIcon],svg[ph-letter-circle-p-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m8-136h-32a12 12 0 0 0-12 12v80a12 12 0 0 0 24 0v-12h20a40 40 0 0 0 0-80m0 56h-20v-32h20a16 16 0 0 1 0 32"></svg:path>`,
})
export class PhLetterCirclePBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
