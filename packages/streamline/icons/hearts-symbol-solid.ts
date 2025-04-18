import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHeartsSymbolSolidIcon],svg[streamline-hearts-symbol-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.788 1.314c.988.02 2.085.49 3.214 1.56c1.127-1.067 2.223-1.536 3.21-1.555c1.04-.02 1.918.46 2.536 1.18c1.218 1.42 1.47 3.85-.058 5.377l-.001.001l-4.247 4.208c-.81.802-2.07.802-2.88 0L1.316 7.877C-.217 6.343.032 3.913 1.25 2.491c.617-.72 1.495-1.2 2.537-1.178Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHeartsSymbolSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
