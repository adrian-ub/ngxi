import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsArrowClockwiseIcon],svg[akar-icons-arrow-clockwise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.734 16.06a8.92 8.92 0 0 1-3.915 3.978a8.7 8.7 0 0 1-5.471.832a8.8 8.8 0 0 1-4.887-2.64a9.07 9.07 0 0 1-2.388-5.079a9.14 9.14 0 0 1 1.044-5.53a8.9 8.9 0 0 1 4.069-3.815a8.7 8.7 0 0 1 5.5-.608c1.85.401 3.366 1.313 4.62 2.755c.151.16.735.806 1.22 1.781"></svg:path><svg:path d="m15.069 7.813l5.04.907L21 3.59"></svg:path></svg:g>`,
})
export class AkarIconsArrowClockwiseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
