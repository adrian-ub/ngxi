import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareTwoBoldIcon],svg[ph-number-square-two-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152Zm-66.43-92.76a12 12 0 0 0-2.35-16.82a12 12 0 0 0-16.8 2.36a11.7 11.7 0 0 0-1.74 3.22a12 12 0 0 1-22.63-8a36.5 36.5 0 0 1 5.2-9.67a36 36 0 0 1 57.5 43.34L128 164h24a12 12 0 0 1 0 24h-48a12 12 0 0 1-9.6-19.2Z"></svg:path>`,
})
export class PhNumberSquareTwoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
