import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleFourBoldIcon],svg[ph-number-circle-four-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m32-72h-4V80a12 12 0 0 0-21.47-7.37l-56 72A12 12 0 0 0 88 164h44v12a12 12 0 0 0 24 0v-12h4a12 12 0 0 0 0-24m-28 0h-19.46L132 115Z"></svg:path>`,
})
export class PhNumberCircleFourBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
