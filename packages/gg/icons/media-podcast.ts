import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggMediaPodcastIcon],svg[gg-media-podcast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5.636 20.364a9 9 0 1 1 12.728 0l1.414 1.414A10.97 10.97 0 0 0 23 14c0-6.075-4.925-11-11-11S1 7.925 1 14c0 3.038 1.231 5.788 3.222 7.778z"></svg:path><svg:path d="M16.95 18.95a7 7 0 1 0-9.9 0l1.415-1.414a5 5 0 1 1 7.071 0z"></svg:path><svg:path d="M14.121 16.121a3 3 0 1 0-4.243 0l1.415-1.414a1 1 0 1 1 1.414 0z"></svg:path></svg:g>`,
})
export class GgMediaPodcastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
