import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSubtitlesOffIcon],svg[material-symbols-light-subtitles-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.423 10.846h-3.92L7.659 5h11.727q.69 0 1.153.463T21 6.616v10.746q0 .217-.04.41t-.172.359l-6.284-6.285h2.919zm1.935 10.12L17.38 19H4.616q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5v1.242L2.382 3.99l.708-.708l16.977 16.977zm-12.781-9.12h1v-.815l-.185-.185h-.815zm6.227 2.577H6.577v1h7.227z"></svg:path>`,
})
export class MaterialSymbolsLightSubtitlesOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
