import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowLeftLongIcon],svg[lets-icons-arrow-left-long-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12h14"></svg:path><svg:path fill="currentColor" d="m2.285 11.797l5.45-3.893A.8.8 0 0 1 9 8.554v6.891a.8.8 0 0 1-1.265.651l-5.45-3.893a.25.25 0 0 1 0-.406"></svg:path></svg:g>`,
})
export class LetsIconsArrowLeftLongIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
