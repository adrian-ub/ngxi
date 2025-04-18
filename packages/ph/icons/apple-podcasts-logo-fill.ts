import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phApplePodcastsLogoFillIcon],svg[ph-apple-podcasts-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M159.8 151.82a19.67 19.67 0 0 1 3.58 17.05l-12.18 48A20.17 20.17 0 0 1 131.56 232h-7.12a20.17 20.17 0 0 1-19.64-15.13l-12.18-48a19.67 19.67 0 0 1 3.58-17.05a20.17 20.17 0 0 1 16-7.82h31.5a20.17 20.17 0 0 1 16.1 7.82M156 116a28 28 0 1 0-28 28a28 28 0 0 0 28-28m26 27a8 8 0 1 0 15.41 4.29a72 72 0 1 0-138.74 0A8 8 0 0 0 74 143a56 56 0 1 1 108 0M128 24a104 104 0 0 0-57.82 190.46a8 8 0 1 0 8.9-13.3a88 88 0 1 1 97.84 0a8 8 0 0 0 8.9 13.3A104 104 0 0 0 128 24"></svg:path>`,
})
export class PhApplePodcastsLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
