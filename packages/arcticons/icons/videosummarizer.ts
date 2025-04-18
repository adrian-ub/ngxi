import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVideosummarizerIcon],svg[arcticons-videosummarizer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16.02 8.045l15.764-.076c6.546-.032 11.536 5.853 11.71 12.954c.278 11.424-7.968 16.485-14.287 19.108v-8.13H16.02c-6.79 0-11.52-4.634-11.52-10.978c0-7.722 3.898-12.841 11.52-12.878"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.34 14.997v11.51l9.966-5.755z"></svg:path>`,
})
export class ArcticonsVideosummarizerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
