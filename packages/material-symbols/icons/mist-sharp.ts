import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMistSharpIcon],svg[material-symbols-mist-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19v-2h12v2zm14 0v-2h4v2zM3 15v-2h4v2zm6 0v-2h12v2zm-6-4V9h13v2zm15 0V9h3v2zM3 7V5h7v2zm9 0V5h9v2z"></svg:path>`,
})
export class MaterialSymbolsMistSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
