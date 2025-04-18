import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDivideDuotoneIcon],svg[ph-divide-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 56v144a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8m-96-48a16 16 0 1 0-16-16a16 16 0 0 0 16 16m0 96a16 16 0 1 0 16 16a16 16 0 0 0-16-16"></svg:path></svg:g>`,
})
export class PhDivideDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
