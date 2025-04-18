import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStructure03Icon],svg[hugeicons-structure-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.5 16.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M10.286 2h3.428C15.79 2 16 2.925 16 4.5S15.789 7 13.714 7h-3.428C8.21 7 8 6.075 8 4.5S8.211 2 10.286 2M4 13c.248-1.623 1.245-2 3.988-2h8.027c2.743 0 3.737.377 3.985 2M2 15c0-.943 0-1.414.293-1.707S3.057 13 4 13s1.414 0 1.707.293S6 14.057 6 15s0 1.414-.293 1.707S4.943 17 4 17s-1.414 0-1.707-.293S2 15.943 2 15m16 0c0-.943 0-1.414.293-1.707S19.057 13 20 13s1.414 0 1.707.293S22 14.057 22 15s0 1.414-.293 1.707S20.943 17 20 17s-1.414 0-1.707-.293S18 15.943 18 15m-6-8v7m0 5v3" color="currentColor"></svg:path>`,
})
export class HugeiconsStructure03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
