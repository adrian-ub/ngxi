import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRawOnSharpIcon],svg[material-symbols-raw-on-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 15V9h5v3.9h-.9L8 15H6.5l-.9-2H4.5v2zm5.75 0l1.5-6h2.5l1.5 6h-1.5l-.35-1.5h-1.75l-.4 1.5zm6.75 0L14 9h1.5l.75 3L17 9h1.5l.75 3L20 9h1.5L20 15h-1.5l-.75-3.05L17 15zM11 12h1l-.25-1h-.5zm-6.5-.5h2v-1h-2z"></svg:path>`,
})
export class MaterialSymbolsRawOnSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
