import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLighthouseIcon],svg[hugeicons-lighthouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.02 8c-.695-.933-1.877-2.238-1.416-3.524C8.91 3.621 11.007 2 12 2s3.09 1.62 3.396 2.476c.461 1.286-.722 2.591-1.416 3.524M8 8h8m-8 5h8m-8.5 5h9m-7-10L7 22m7.5-14L17 22M5 22h14m0-14.5l2-.5m-2 3.5l2 .5M5 7.5L3 7m2 3.5L3 11" color="currentColor"></svg:path>`,
})
export class HugeiconsLighthouseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
