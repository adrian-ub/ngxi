import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStructure02Icon],svg[hugeicons-structure-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 13c0-.943 0-1.414.293-1.707S3.057 11 4 11s1.414 0 1.707.293S6 12.057 6 13s0 1.414-.293 1.707S4.943 15 4 15s-1.414 0-1.707-.293S2 13.943 2 13m16 0c0-.943 0-1.414.293-1.707S19.057 11 20 11s1.414 0 1.707.293S22 12.057 22 13s0 1.414-.293 1.707S20.943 15 20 15s-1.414 0-1.707-.293S18 13.943 18 13m-6-6v7m0 5v3M4 11V9c0-3.31.69-4 4-4m12 6V9c0-3.31-.69-4-4-4m-1.5 11.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M10 2h4c1.815 0 2 .925 2 2.5S15.815 7 14 7h-4c-1.815 0-2-.925-2-2.5S8.185 2 10 2" color="currentColor"></svg:path>`,
})
export class HugeiconsStructure02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
