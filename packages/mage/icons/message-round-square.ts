import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageMessageRoundSquareIcon],svg[mage-message-round-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M17.328 12a5.32 5.32 0 0 1-3.287 4.923a5.34 5.34 0 0 1-4.227-.061l-2.228.33a.688.688 0 0 1-.783-.825l.309-2.259A5.15 5.15 0 0 1 6.672 12A5.315 5.315 0 0 1 9.96 7.078a5.334 5.334 0 0 1 6.965 2.884c.267.646.404 1.339.403 2.038"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageMessageRoundSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
