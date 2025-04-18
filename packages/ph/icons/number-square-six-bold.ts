import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareSixBoldIcon],svg[ph-number-square-six-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152Zm-76-16a40 40 0 0 0 5.06-79.67l13.24-22.18a12 12 0 1 0-20.6-12.3l-32.24 54A40 40 0 0 0 128 188m0-56a16 16 0 1 1-16 16a16 16 0 0 1 16-16"></svg:path>`,
})
export class PhNumberSquareSixBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
