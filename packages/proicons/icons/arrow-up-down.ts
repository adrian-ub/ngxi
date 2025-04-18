import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsArrowUpDownIcon],svg[proicons-arrow-up-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 16.25l3.94 3.94c.292.292.676.439 1.06.439m5-4.379l-3.94 3.94a1.5 1.5 0 0 1-1.06.439M7 7.75l3.94-3.94A1.5 1.5 0 0 1 12 3.371m5 4.379l-3.94-3.94A1.5 1.5 0 0 0 12 3.372m0 0V20.63"></svg:path>`,
})
export class ProiconsArrowUpDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
