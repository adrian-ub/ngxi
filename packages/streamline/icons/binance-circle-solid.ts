import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBinanceCircleSolidIcon],svg[streamline-binance-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0M9.89 3.963l-2.5-2a.625.625 0 0 0-.78 0l-2.5 2a.625.625 0 0 0 .78.976L7 3.252l2.11 1.687a.625.625 0 1 0 .78-.976m-5 5.097a.625.625 0 1 0-.78.976l2.5 2a.625.625 0 0 0 .78 0l2.5-2a.625.625 0 1 0-.78-.976L7 10.748zM7.75 7a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-3.95.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M10.95 7a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBinanceCircleSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
