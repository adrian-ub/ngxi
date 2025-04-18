import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundSentimentNeutralIcon],svg[ic-round-sentiment-neutral-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.75 15.5h4.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-4.5c-.41 0-.75.34-.75.75s.34.75.75.75"></svg:path><svg:circle cx="15.5" cy="9.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="8.5" cy="9.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8"></svg:path>`,
})
export class IcRoundSentimentNeutralIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
