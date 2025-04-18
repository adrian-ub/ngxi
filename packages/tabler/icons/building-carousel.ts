import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBuildingCarouselIcon],svg[tabler-building-carousel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0"></svg:path><svg:path d="M3 8a2 2 0 1 0 4 0a2 2 0 1 0-4 0m7-4a2 2 0 1 0 4 0a2 2 0 1 0-4 0m7 4a2 2 0 1 0 4 0a2 2 0 1 0-4 0M3 16a2 2 0 1 0 4 0a2 2 0 1 0-4 0m14 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-9 6l4-10l4 10"></svg:path></svg:g>`,
})
export class TablerBuildingCarouselIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
