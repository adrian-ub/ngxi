import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBitcoinSolidIcon],svg[streamline-bitcoin-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.744 1.029a1 1 0 1 0-2 0v.604a1.74 1.74 0 0 0-.886 1.518v7.432a1.74 1.74 0 0 0 .886 1.518v.87a1 1 0 1 0 2 0v-.644h1.019v.644a1 1 0 1 0 2 0v-.805A3.416 3.416 0 0 0 9.99 6.353a3.05 3.05 0 0 0-1.227-4.725v-.6a1 1 0 1 0-2 0v.379h-1.02zm-.886 6.466v2.832h2.868a1.416 1.416 0 0 0 .02-2.832H4.859Zm2.832-2H4.858V3.407h2.86a1.049 1.049 0 0 1-.028 2.088" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBitcoinSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
