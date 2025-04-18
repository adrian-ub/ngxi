import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNotEqualSignSolidIcon],svg[streamline-not-equal-sign-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.705.12a1 1 0 0 1 .406 1.354L10.021 3.5H13a1 1 0 1 1 0 2H8.943l-1.615 3H13a1 1 0 1 1 0 2H6.251L4.65 13.474a1 1 0 1 1-1.761-.948l1.09-2.026H1a1 1 0 1 1 0-2h4.057l1.615-3H1a1 1 0 0 1 0-2h6.749L9.35.526A1 1 0 0 1 10.705.12" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineNotEqualSignSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
