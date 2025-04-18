import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSosSharpIcon],svg[material-symbols-sos-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 17V7h7v10zM1 17v-2h4v-2H1V7h6v2H3v2h4v6zm16 0v-2h4v-2h-4V7h6v2h-4v2h4v6zm-6.5-2h3V9h-3z"></svg:path>`,
})
export class MaterialSymbolsSosSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
