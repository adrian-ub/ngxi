import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCarouselHorizontalIcon],svg[tabler-carousel-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1zm15 11h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1M2 17h1a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2"></svg:path>`,
})
export class TablerCarouselHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
