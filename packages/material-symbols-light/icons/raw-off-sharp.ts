import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRawOffSharpIcon],svg[material-symbols-light-raw-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.492 21.908L2.823 4.238l.708-.707L21.2 21.2zm-2.184-7.216l-.904-3.415l-.677 2.6l-1.72-1.708l-.757-2.861h.904l.942 3.519l.904-3.52h.808l.903 3.52l.943-3.52h.904l-1.424 5.385zm-9.423 0l1.3-4.008l.68.682l-.307.942h1.25l.846.846h-2.331l-.515 1.538zm-5.577 0V9.308h4.384v3.323H6.64l.9 2.061h-.923l-.9-2H4.192v2zm.884-2.884h2.616v-1.616H4.192z"></svg:path>`,
})
export class MaterialSymbolsLightRawOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
