import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGooglePodcastsIcon],svg[arcticons-google-podcasts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.6 21.13v5.77M6.4 21.13v5.77M24 3.5v5.25m0 30.5v5.25m0-30.02v19.04m8.8-22.26v5.77m0 5.73v13.98m-17.6 0v-5.77m0-5.73V11.26"></svg:path>`,
})
export class ArcticonsGooglePodcastsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
