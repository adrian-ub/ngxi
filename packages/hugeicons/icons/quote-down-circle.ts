import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsQuoteDownCircleIcon],svg[hugeicons-quote-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M10.746 10c0-.943 0-1.414-.311-1.707S9.624 8 8.623 8s-1.501 0-1.812.293S6.5 9.057 6.5 10s0 1.414.31 1.707c.312.293.812.293 1.813.293s1.5 0 1.812-.293c.31-.293.31-.764.31-1.707m0 0v2.069c0 1.833-1.335 3.388-3.185 3.931m9.939-6c0-.943 0-1.414-.31-1.707C16.877 8 16.377 8 15.376 8s-1.5 0-1.812.293c-.31.293-.31.764-.31 1.707s0 1.414.31 1.707c.311.293.812.293 1.812.293s1.501 0 1.812-.293s.311-.764.311-1.707m0 0v2.069c0 1.833-1.335 3.388-3.184 3.931"></svg:path></svg:g>`,
})
export class HugeiconsQuoteDownCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
