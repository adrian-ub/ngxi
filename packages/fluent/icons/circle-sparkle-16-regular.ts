import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCircleSparkle16RegularIcon],svg[fluent-circle-sparkle-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.878.282l.348 1.071a2.2 2.2 0 0 0 1.398 1.397l1.072.348l.021.006a.423.423 0 0 1 0 .798l-1.071.348a2.2 2.2 0 0 0-1.399 1.397l-.348 1.07a.423.423 0 0 1-.798 0l-.348-1.07a2.2 2.2 0 0 0-1.399-1.403l-1.072-.348a.423.423 0 0 1 0-.798l1.072-.348a2.2 2.2 0 0 0 1.377-1.397l.348-1.07a.423.423 0 0 1 .799 0m4.905 7.931l-.765-.248a1.58 1.58 0 0 1-1-.999l-.248-.764a.302.302 0 0 0-.57 0l-.25.764a1.58 1.58 0 0 1-.983.999l-.765.248a.303.303 0 0 0 0 .57l.765.249a1.58 1.58 0 0 1 1 1.002l.248.764a.302.302 0 0 0 .57 0l.249-.764a1.58 1.58 0 0 1 .999-.999l.765-.248a.303.303 0 0 0 0-.57zm-3.027 3.557c.219.149.477.229.746.23q.13 0 .256-.018a7 7 0 1 1-4.976-10.94c-.06.18-.16.34-.29.47s-.29.24-.45.29l-.736.237a6.001 6.001 0 1 0 5.396 9.688z"></svg:path>`,
})
export class FluentCircleSparkle16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
