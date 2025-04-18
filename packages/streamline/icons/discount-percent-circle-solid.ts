import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDiscountPercentCircleSolidIcon],svg[streamline-discount-percent-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0m-3.812-3.188a.625.625 0 0 0-.884 0L3.812 9.304a.625.625 0 1 0 .884.884l5.492-5.492a.625.625 0 0 0 0-.884M4.803 3.63a1.174 1.174 0 1 0 0 2.349a1.174 1.174 0 0 0 0-2.349m4.394 4.393a1.174 1.174 0 1 0 0 2.349a1.174 1.174 0 0 0 0-2.349" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineDiscountPercentCircleSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
