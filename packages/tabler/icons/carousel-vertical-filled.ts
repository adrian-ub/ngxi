import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCarouselVerticalFilledIcon],svg[tabler-carousel-vertical-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-2 13a2 2 0 0 1 1.995 1.85L18 21v1a1 1 0 0 1-1.993.117L16 22v-1H8v1a1 1 0 0 1-1.993.117L6 22v-1a2 2 0 0 1 1.85-1.995L8 19zm1-18a1 1 0 0 1 .993.883L18 2v1a2 2 0 0 1-1.85 1.995L16 5H8a2 2 0 0 1-1.995-1.85L6 3V2a1 1 0 0 1 1.993-.117L8 2v1h8V2a1 1 0 0 1 1-1"></svg:path>`,
})
export class TablerCarouselVerticalFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
