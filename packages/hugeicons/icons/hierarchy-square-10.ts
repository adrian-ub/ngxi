import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHierarchySquare10Icon],svg[hugeicons-hierarchy-square-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 20c0-.943 0-1.414.293-1.707S3.057 18 4 18h1c.943 0 1.414 0 1.707.293S7 19.057 7 20s0 1.414-.293 1.707S5.943 22 5 22H4c-.943 0-1.414 0-1.707-.293S2 20.943 2 20m15 0c0-.943 0-1.414.293-1.707S18.057 18 19 18h1c.943 0 1.414 0 1.707.293S22 19.057 22 20s0 1.414-.293 1.707S20.943 22 20 22h-1c-.943 0-1.414 0-1.707-.293S17 20.943 17 20m2.5-2.5c0-3.31-.648-4-3.75-4H14.5m-10 4c0-3.31.648-4 3.75-4H9.5M12 7v4m-2-9h4c1.815 0 2 .925 2 2.5S15.815 7 14 7h-4c-1.815 0-2-.925-2-2.5S8.185 2 10 2"></svg:path><svg:path d="M14.5 13.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path></svg:g>`,
})
export class HugeiconsHierarchySquare10Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
