import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFlipFlopsIcon],svg[tabler-flip-flops-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M18 4c2.21 0 4 1.682 4 3.758q.002.117-.008.234l-.6 9.014c-.11 1.683-1.596 3-3.392 3s-3.28-1.311-3.392-3l-.6-9.014c-.138-2.071 1.538-3.855 3.743-3.985a4 4 0 0 1 .25-.007z"></svg:path><svg:path d="M14.5 14Q16 9 18 9t3.5 5M18 16v1M6 4c2.21 0 4 1.682 4 3.758q.002.117-.008.234l-.6 9.014c-.11 1.683-1.596 3-3.392 3s-3.28-1.311-3.392-3l-.6-9.014C1.87 5.921 3.546 4.137 5.75 4.007C5.834 4.007 5.917 4 6 4"></svg:path><svg:path d="M2.5 14Q4 9 6 9t3.5 5M6 16v1"></svg:path></svg:g>`,
})
export class TablerFlipFlopsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
