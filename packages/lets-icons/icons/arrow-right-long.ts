import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowRightLongIcon],svg[lets-icons-arrow-right-long-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 12H3"></svg:path><svg:path fill="currentColor" d="m21.715 11.797l-5.45-3.893a.8.8 0 0 0-1.265.65v6.891a.8.8 0 0 0 1.265.651l5.45-3.893a.25.25 0 0 0 0-.406"></svg:path></svg:g>`,
})
export class LetsIconsArrowRightLongIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
