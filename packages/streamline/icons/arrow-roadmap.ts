import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowRoadmapIcon],svg[streamline-arrow-roadmap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 11.643h6.5m-1.857-1.857l1.857 1.857l-1.857 1.857M3.286 1.893a1.393 1.393 0 1 0 2.786 0a1.393 1.393 0 1 0-2.786 0M7 6.536a1.393 1.393 0 1 0 2.786 0a1.393 1.393 0 1 0-2.786 0m-2.786 5.107a1.393 1.393 0 1 0 2.786 0a1.393 1.393 0 1 0-2.786 0"></svg:path><svg:path d="M7 6.536H3.054a2.554 2.554 0 0 0 0 5.107h1.16m5.572-5.107h1.393a2.321 2.321 0 0 0 0-4.643H6.07m-2.784 0H.5"></svg:path></svg:g>`,
})
export class StreamlineArrowRoadmapIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
