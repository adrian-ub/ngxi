import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsListAltCheckSharpIcon],svg[material-symbols-list-alt-check-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h18v9.7l-3.65 3.65l-2.125-2.125l-4.25 4.225l2.55 2.55zm4-8h2v-2H7zm0-4h2V7H7zm4 4h6v-2h-6zm0-4h6V7h-6zm6.35 13l-3.55-3.55l1.425-1.4l2.125 2.125l4.25-4.25L23 16.35z"></svg:path>`,
})
export class MaterialSymbolsListAltCheckSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
