import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSubtitlesOffOutlineSharpIcon],svg[material-symbols-light-subtitles-off-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V5h1.808l1 1H4v12h12.38l-2.576-2.577H6.577v-1h6.227L2.38 3.989l.708-.708l16.977 16.977l-.708.708L17.38 19zm17-1.658V6H8.658l-1-1H21v13.342zm-5.496-5.496l-1-1h3.919v1zm-7.927 0v-1h1v1zm3.902.252"></svg:path>`,
})
export class MaterialSymbolsLightSubtitlesOffOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
