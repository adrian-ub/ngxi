import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineVerticalSliderSquareIcon],svg[streamline-vertical-slider-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 1.5v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1m4 9.5V6"></svg:path><svg:path d="M4.5 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m5-3v3m0 3v2m0-2a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path></svg:g>`,
})
export class StreamlineVerticalSliderSquareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
