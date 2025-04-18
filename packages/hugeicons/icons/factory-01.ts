import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFactory01Icon],svg[hugeicons-factory-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 21c1.5-3 2.5-7 2.5-13h7c0 6 1 10 2.5 13M12 4.265c1.17-1.637 2.668-1.637 3.838 0c.706 1.004 1.618.967 2.341-.037c1.153-1.637 2.65-1.637 3.821 0"></svg:path><svg:path d="M12.85 12.071h3.554c.14 1.838-.014 5.045 3.291 8.749M2 21h19"></svg:path></svg:g>`,
})
export class HugeiconsFactory01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
