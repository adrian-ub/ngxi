import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phQuotesBoldIcon],svg[ph-quotes-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 52H40a20 20 0 0 0-20 20v64a20 20 0 0 0 20 20h56v4a28 28 0 0 1-28 28a12 12 0 0 0 0 24a52.06 52.06 0 0 0 52-52V72a20 20 0 0 0-20-20m-4 80H44V76h52Zm120-80h-60a20 20 0 0 0-20 20v64a20 20 0 0 0 20 20h56v4a28 28 0 0 1-28 28a12 12 0 0 0 0 24a52.06 52.06 0 0 0 52-52V72a20 20 0 0 0-20-20m-4 80h-52V76h52Z"></svg:path>`,
})
export class PhQuotesBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
