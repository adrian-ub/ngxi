import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsParabola02Icon],svg[hugeicons-parabola-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 2c0 8.284-4.03 15-9 15S3 10.284 3 2m0 18h1.059m11.647 0h1.059m3.176 0H21M7.235 20h1.06"></svg:path><svg:path d="M9.5 4.5C11.1 2.686 11.45 2 12 2m2.5 2.5C12.9 2.686 12.55 2 12 2m0 0v20"></svg:path></svg:g>`,
})
export class HugeiconsParabola02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
