import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsParabola03Icon],svg[hugeicons-parabola-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 2c0 8.284-4.03 15-9 15S3 10.284 3 2M2 20h20"></svg:path><svg:path d="M9.5 4.5C11.1 2.686 11.45 2 12 2m2.5 2.5C12.9 2.686 12.55 2 12 2m0 0v20"></svg:path></svg:g>`,
})
export class HugeiconsParabola03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
