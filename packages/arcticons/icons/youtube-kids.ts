import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsYoutubeKidsIcon],svg[arcticons-youtube-kids-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m36.527 35.361l-7.396.53l-.05.003a25.3 25.3 0 0 0-7.056 1.638l-4.759 1.794a7.506 7.506 0 0 1-9.982-5.422L4.674 21.95a7.506 7.506 0 0 1 5.733-8.934l21.325-4.655a7.506 7.506 0 0 1 8.934 5.732l2.659 12.18a7.506 7.506 0 0 1-6.798 9.087"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.164 18.952l2.316 10.61l9.593-6.993z"></svg:path>`,
})
export class ArcticonsYoutubeKidsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
