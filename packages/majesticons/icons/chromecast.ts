import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsChromecastIcon],svg[majesticons-chromecast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 20h.01M7 20a4 4 0 0 0-4-4m8 4a8 8 0 0 0-8-8"></svg:path><svg:path fill="currentColor" d="M19 4H5a2 2 0 0 0-2 2v2.5c4 .167 12 2.7 12 11.5h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></svg:path></svg:g>`,
})
export class MajesticonsChromecastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
