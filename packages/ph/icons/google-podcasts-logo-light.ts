import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGooglePodcastsLogoLightIcon],svg[ph-google-podcasts-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M134 16v32a6 6 0 0 1-12 0V16a6 6 0 0 1 12 0m42 42a6 6 0 0 0-6 6v32a6 6 0 0 0 12 0V64a6 6 0 0 0-6-6m-48 144a6 6 0 0 0-6 6v32a6 6 0 0 0 12 0v-32a6 6 0 0 0-6-6m0-120a6 6 0 0 0-6 6v80a6 6 0 0 0 12 0V88a6 6 0 0 0-6-6M80 58a6 6 0 0 0-6 6v56a6 6 0 0 0 12 0V64a6 6 0 0 0-6-6m96 72a6 6 0 0 0-6 6v56a6 6 0 0 0 12 0v-56a6 6 0 0 0-6-6M32 106a6 6 0 0 0-6 6v32a6 6 0 0 0 12 0v-32a6 6 0 0 0-6-6m48 48a6 6 0 0 0-6 6v32a6 6 0 0 0 12 0v-32a6 6 0 0 0-6-6m144-48a6 6 0 0 0-6 6v32a6 6 0 0 0 12 0v-32a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhGooglePodcastsLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
