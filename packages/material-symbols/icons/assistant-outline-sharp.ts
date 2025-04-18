import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAssistantOutlineSharpIcon],svg[material-symbols-assistant-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 23l-3-3H3V2h18v18h-6l-3 3Zm-7-5h4.8l2.2 2.2l2.2-2.2H19V4H5v14ZM5 4v14V4Zm8.55 8.55L17 11l-3.45-1.55L12 6l-1.55 3.45L7 11l3.45 1.55L12 16l1.55-3.45Z"></svg:path>`,
})
export class MaterialSymbolsAssistantOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
