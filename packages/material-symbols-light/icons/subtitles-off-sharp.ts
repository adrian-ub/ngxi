import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSubtitlesOffSharpIcon],svg[material-symbols-light-subtitles-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.423 10.846h-3.92L7.659 5H21v13.342l-6.496-6.496h2.919zm1.935 10.12L17.38 19H3V5h1.616v1.242L2.38 3.99l.708-.708l16.977 16.977zm-12.781-9.12h1v-.815l-.185-.185h-.815zm6.227 2.577H6.577v1h7.227z"></svg:path>`,
})
export class MaterialSymbolsLightSubtitlesOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
