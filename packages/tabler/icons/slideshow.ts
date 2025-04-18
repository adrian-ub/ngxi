import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSlideshowIcon],svg[tabler-slideshow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15 6h.01M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></svg:path><svg:path d="m3 13l4-4a3 5 0 0 1 3 0l4 4"></svg:path><svg:path d="m13 12l2-2a3 5 0 0 1 3 0l3 3M8 21h.01M12 21h.01M16 21h.01"></svg:path></svg:g>`,
})
export class TablerSlideshowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
