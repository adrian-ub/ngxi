import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFileDownloadOffSharpIcon],svg[material-symbols-file-download-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.775 22.625L17.15 20H4v-5h2v3h9.15l-2.575-2.575L12 16l-5-5l.575-.575l-6.2-6.2L2.8 2.8l18.4 18.4zm-4.35-10.05L14 11.15l1.6-1.6L17 11zM13 10.15l-2-2V4h2zm7 7l-2-2V15h2z"></svg:path>`,
})
export class MaterialSymbolsFileDownloadOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
