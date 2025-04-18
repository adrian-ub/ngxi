import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHeartRateSearchSolidIcon],svg[streamline-heart-rate-search-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.25 1.5a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5M0 6.25a6.25 6.25 0 1 1 11.32 3.656l2.387 2.387a1 1 0 1 1-1.414 1.414L9.906 11.32A6.25 6.25 0 0 1 0 6.25m5.962-1.723a.625.625 0 0 0-1.095-.044L4.101 5.75H3.046a.625.625 0 1 0 0 1.25h1.408a.63.63 0 0 0 .535-.302l.36-.596l.93 1.87a.625.625 0 0 0 1.016.15L8.345 7h1.11a.625.625 0 1 0 0-1.25h-1.38a.63.63 0 0 0-.456.197l-.621.663z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHeartRateSearchSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
