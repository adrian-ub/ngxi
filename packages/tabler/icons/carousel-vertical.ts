import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCarouselVerticalIcon],svg[tabler-carousel-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 8v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1M7 22v-1a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1m0-20v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V2"></svg:path>`,
})
export class TablerCarouselVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
