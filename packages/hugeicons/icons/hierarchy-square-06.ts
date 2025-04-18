import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHierarchySquare06Icon],svg[hugeicons-hierarchy-square-06-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 2h4c1.815 0 2 .925 2 2.5S15.815 7 14 7h-4c-1.815 0-2-.925-2-2.5S8.185 2 10 2M2 19.5c0-1.178 0-1.768.366-2.134S3.321 17 4.5 17s1.768 0 2.134.366S7 18.322 7 19.5s0 1.768-.366 2.134S5.679 22 4.5 22s-1.768 0-2.134-.366S2 20.678 2 19.5m15 0c0-1.178 0-1.768.366-2.134S18.322 17 19.5 17s1.768 0 2.134.366s.366.956.366 2.134s0 1.768-.366 2.134S20.678 22 19.5 22s-1.768 0-2.134-.366S17 20.678 17 19.5m-2.5-7a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M12 7v3m-2.5 3l-5 4m10-4l5 4" color="currentColor"></svg:path>`,
})
export class HugeiconsHierarchySquare06Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
