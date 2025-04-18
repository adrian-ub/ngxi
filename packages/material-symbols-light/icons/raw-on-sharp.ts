import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRawOnSharpIcon],svg[material-symbols-light-raw-on-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.308 14.692V9.308h4.384v3.323H6.64l.9 2.061h-.923l-.9-2H4.192v2zm5.577 0l1.73-5.384h1.347l1.73 5.384h-.923l-.503-1.538h-1.943l-.515 1.538zm6.788 0L14.25 9.308h.904l.942 3.519l.904-3.52h.808l.903 3.52l.943-3.52h.904l-1.424 5.385h-.826l-.904-3.415l-.904 3.415zm-5.115-2.384h1.461l-.596-1.808h-.27zm-6.366-.5h2.616v-1.616H4.192z"></svg:path>`,
})
export class MaterialSymbolsLightRawOnSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
