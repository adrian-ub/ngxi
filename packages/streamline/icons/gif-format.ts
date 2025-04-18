import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineGifFormatIcon],svg[streamline-gif-format-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.438 4.656v4.289s0 2-2 2H2.563s-2 0-2-2V4.656s0-2 2-2h8.875s2 0 2 2M6 5.045h1.756m0 3.51H6m.878-3.51v3.51"></svg:path><svg:path d="M3.758 7.093h.878v.585a.88.88 0 0 1-.878.878h-.585a.88.88 0 0 1-.878-.878V5.923c0-.485.393-.878.878-.878h.585a.88.88 0 0 1 .828.585m4.799 2.926v-3.51h2.34m-2.34 1.608h2.047"></svg:path></svg:g>`,
})
export class StreamlineGifFormatIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
