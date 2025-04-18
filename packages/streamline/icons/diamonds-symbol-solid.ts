import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDiamondsSymbolSolidIcon],svg[streamline-diamonds-symbol-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.072.785a1.342 1.342 0 0 0-2.144 0L1.89 6.25a1.26 1.26 0 0 0 0 1.5l4.037 5.465a1.342 1.342 0 0 0 2.144 0L12.11 7.75a1.26 1.26 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineDiamondsSymbolSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
