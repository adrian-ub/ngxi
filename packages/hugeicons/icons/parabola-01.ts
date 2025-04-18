import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsParabola01Icon],svg[hugeicons-parabola-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 3c0 8.284-4.03 15-9 15S3 11.284 3 3m0 18h1.059m11.647 0h1.059m3.176 0H21M7.235 21h1.06m3.176 0h1.058" color="currentColor"></svg:path>`,
})
export class HugeiconsParabola01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
