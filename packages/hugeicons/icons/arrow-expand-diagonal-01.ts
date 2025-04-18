import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsArrowExpandDiagonal01Icon],svg[hugeicons-arrow-expand-diagonal-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 8l8 8m1-12.763c.75-.011 3.236-.527 3.763 0s.011 3.012 0 3.763M3.237 17c-.011.75-.527 3.236 0 3.763s3.012.011 3.763 0m7.998-11.756l5.386-5.385M3.626 20.374l5.386-5.386" color="currentColor"></svg:path>`,
})
export class HugeiconsArrowExpandDiagonal01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
