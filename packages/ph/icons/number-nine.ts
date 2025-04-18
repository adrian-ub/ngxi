import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberNineIcon],svg[ph-number-nine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 40a56 56 0 1 0 15.62 109.77L113 204.07a8 8 0 1 0 14 7.85l49.55-88A56 56 0 0 0 128 40m0 96a40 40 0 1 1 40-40a40 40 0 0 1-40 40"></svg:path>`,
})
export class PhNumberNineIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
