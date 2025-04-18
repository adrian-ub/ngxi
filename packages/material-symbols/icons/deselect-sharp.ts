import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDeselectSharpIcon],svg[material-symbols-deselect-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.775 22.6l-5.6-5.6H7V9.825l-5.6-5.6L2.8 2.8l18.4 18.4zM9 15h3.175L9 11.825zm8-.825l-2-2V9h-3.175l-2-2H17zM7 21v-2h2v2zM7 5V3h2v2zm4 16v-2h2v2zm0-16V3h2v2zm4 0V3h2v2zm0 16v-2h2v2zm4-16V3h2v2zM3 21v-2h2v2zm0-4v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2zm16 8v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2z"></svg:path>`,
})
export class MaterialSymbolsDeselectSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
