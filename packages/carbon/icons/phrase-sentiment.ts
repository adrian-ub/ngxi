import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPhraseSentimentIcon],svg[carbon-phrase-sentiment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.303 10a2.66 2.66 0 0 0-1.908.806l-.393.405l-.397-.405a2.66 2.66 0 0 0-3.816 0a2.8 2.8 0 0 0 0 3.896L16.002 19l4.209-4.298a2.8 2.8 0 0 0 0-3.896A2.66 2.66 0 0 0 18.303 10"></svg:path><svg:path fill="currentColor" d="M17.736 30L16 29l4-7h6a1.997 1.997 0 0 0 2-2V8a1.997 1.997 0 0 0-2-2H6a1.997 1.997 0 0 0-2 2v12a1.997 1.997 0 0 0 2 2h9v2H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-4.835Z"></svg:path>`,
})
export class CarbonPhraseSentimentIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
