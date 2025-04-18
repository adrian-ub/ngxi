import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phQuotesThinIcon],svg[ph-quotes-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 60H40a12 12 0 0 0-12 12v64a12 12 0 0 0 12 12h64v12a36 36 0 0 1-36 36a4 4 0 0 0 0 8a44.05 44.05 0 0 0 44-44V72a12 12 0 0 0-12-12m4 80H40a4 4 0 0 1-4-4V72a4 4 0 0 1 4-4h60a4 4 0 0 1 4 4Zm112-80h-60a12 12 0 0 0-12 12v64a12 12 0 0 0 12 12h64v12a36 36 0 0 1-36 36a4 4 0 0 0 0 8a44.05 44.05 0 0 0 44-44V72a12 12 0 0 0-12-12m4 80h-64a4 4 0 0 1-4-4V72a4 4 0 0 1 4-4h60a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhQuotesThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
