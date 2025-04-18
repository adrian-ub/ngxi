import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGooglePodcastsLogoThinIcon],svg[ph-google-podcasts-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 16v32a4 4 0 0 1-8 0V16a4 4 0 0 1 8 0m44 44a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0V64a4 4 0 0 0-4-4m-48 144a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0v-32a4 4 0 0 0-4-4m0-120a4 4 0 0 0-4 4v80a4 4 0 0 0 8 0V88a4 4 0 0 0-4-4M80 60a4 4 0 0 0-4 4v56a4 4 0 0 0 8 0V64a4 4 0 0 0-4-4m96 72a4 4 0 0 0-4 4v56a4 4 0 0 0 8 0v-56a4 4 0 0 0-4-4M32 108a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0v-32a4 4 0 0 0-4-4m48 48a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0v-32a4 4 0 0 0-4-4m144-48a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0v-32a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhGooglePodcastsLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
