import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineColorSwatchesIcon],svg[streamline-color-swatches-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5.5h3a1 1 0 0 1 1 1V11A2.5 2.5 0 0 1 3 13.5v0A2.5 2.5 0 0 1 .5 11V1.5a1 1 0 0 1 1-1"></svg:path><svg:path d="M5.5 5L9 1.48a1 1 0 0 1 1.41 0l2.11 2.12a1 1 0 0 1 0 1.41l-7.75 7.76"></svg:path><svg:path d="M9 8.5h3.5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3m-2.5-9h5m-5 4h5"></svg:path></svg:g>`,
})
export class StreamlineColorSwatchesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
