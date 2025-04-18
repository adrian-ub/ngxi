import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDhammajakIcon],svg[streamline-dhammajak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 5.594V.625m0 12.75V8.406M8.406 7h4.969M.625 7h4.969m2.4-.994l3.514-3.514m-9.016 9.016l3.514-3.514m1.988 0l3.514 3.514M2.492 2.492l3.514 3.514M.615 7a6.385 6.385 0 1 0 12.77 0A6.385 6.385 0 1 0 .615 7"></svg:path><svg:path d="M5.594 7a1.406 1.406 0 1 0 2.812 0a1.406 1.406 0 1 0-2.812 0"></svg:path></svg:g>`,
})
export class StreamlineDhammajakIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
