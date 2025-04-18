import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHangoutVideoOffSharpIcon],svg[material-symbols-hangout-video-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 23.3L17.15 20H2V4h2l.6.6v2.8L.7 3.5l1.4-1.4l19.8 19.8zm1.5-4.15l-4-4V8l-4 3.15v-3.1h-3.1L6.85 4H22zM6 16h7.15L6 8.85z"></svg:path>`,
})
export class MaterialSymbolsHangoutVideoOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
