import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSentimentSatisfiedIcon],svg[ic-sharp-sentiment-satisfied-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="15.5" cy="9.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="8.5" cy="9.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m0-4c-1.48 0-2.75-.81-3.45-2H6.88a5.495 5.495 0 0 0 10.24 0h-1.67c-.7 1.19-1.97 2-3.45 2"></svg:path>`,
})
export class IcSharpSentimentSatisfiedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
