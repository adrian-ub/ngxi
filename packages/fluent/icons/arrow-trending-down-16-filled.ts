import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowTrendingDown16FilledIcon],svg[fluent-arrow-trending-down-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.75 12l4.548-.001l.108-.015l.113-.033l.102-.048l.038-.023l.049-.035l.076-.067l.084-.101l.059-.1l.041-.105l.023-.098l.01-.124V6.746a.75.75 0 0 0-1.493-.102l-.006.102L12.5 9.44L8.28 5.217a.75.75 0 0 0-.978-.073l-.084.073L5.75 6.69L3.28 4.219a.75.75 0 0 0-1.133.977l.073.084l2.998 3a.75.75 0 0 0 .977.073l.084-.073L7.75 6.807l3.691 3.693H8.75a.75.75 0 0 0-.743.648L8 11.25c0 .414.336.75.75.75"></svg:path>`,
})
export class FluentArrowTrendingDown16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
