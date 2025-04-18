import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSignalWifiOffIcon],svg[material-symbols-light-signal-wifi-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.214 14.364L8.258 5.433q.933-.223 1.865-.328Q11.056 5 12 5q2.939 0 5.666 1.018T22.577 9zm3.069 7.34l-5.202-5.208L12 19.577L1.423 9q.858-.742 1.778-1.36q.92-.617 1.928-1.09L2.27 3.692l.713-.713L20.997 20.99z"></svg:path>`,
})
export class MaterialSymbolsLightSignalWifiOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
