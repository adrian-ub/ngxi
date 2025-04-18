import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCalculateIcon],svg[hugeicons-calculate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.5 12.95v-1.9c0-4.03 0-6.046-1.391-7.298S16.479 2.5 12 2.5c-4.478 0-6.718 0-8.109 1.252S2.5 7.02 2.5 11.05v1.9c0 4.03 0 6.046 1.391 7.298S7.521 21.5 12 21.5c4.478 0 6.718 0 8.109-1.252S21.5 16.98 21.5 12.95M18 8h-4m2-2v4m2 7.5h-4m4-3h-4m-4 3l-1.75-1.75m0 0L6.5 14m1.75 1.75L10 14m-1.75 1.75L6.5 17.5M10 8H6" color="currentColor"></svg:path>`,
})
export class HugeiconsCalculateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
